"""Crop raw captures in images/ into static/shots/{slug}/{device}-{theme}.webp."""

from __future__ import annotations

import json
import re
from collections import defaultdict
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "images"
OUT = ROOT / "static" / "shots"

# Explicit (folder, base_key) → slug. Prefer this when a folder has multiple screens.
SLUG_MAP: dict[tuple[str, str], str] = {
    ("landing", "login"): "landing",
    ("search", "login"): "search",
    ("jobs", "login"): "jobs",
    ("job", "view_17_tasks"): "job",
    ("scheduling", "view_17_tasks"): "scheduling",
    ("field", "view_17_tasks"): "field",
    ("sales", "sales"): "sales",
    ("sales", "sales-dark"): "sales",
    ("quotes", "sales"): "quotes",
    ("purchasing", "purchasing_order_1"): "purchasing-order",
    ("purchasing", "sales"): "purchasing",
    ("inventory", ""): "inventory",
    ("inventory", "main"): "inventory",
    ("ai", ""): "ai",
    ("ai", "main"): "ai",
    ("assets", "invoicing_view_6"): "assets",
    ("attendence", "invoicing_view_6"): "attendance",
    ("attendance", "invoicing_view_6"): "attendance",
    ("customer", "invoicing_view_6"): "customer",
    ("vendor", "invoicing_view_6"): "vendor",
    ("tether", "invoicing_view_6"): "tether",
    ("purchase-request", "invoicing_view_6"): "purchase-request",
}

# Folders that are one screen each — any key maps to this slug.
FOLDER_SLUG: dict[str, str] = {
    "accounting": "accounting",
    "assets": "assets",
    "attendence": "attendance",
    "attendance": "attendance",
    "counter": "counter",
    "counter-receipt": "counter-receipt",
    "counter-settings": "counter-settings",
    "customer": "customer",
    "customer-quote": "customer-quote",
    "field-fleet-inspections": "field-fleet-inspections",
    "field-sms": "field-sms",
    "huddle": "huddle",
    "products": "products",
    "purchase-request": "purchase-request",
    "qbo": "qbo",
    "sds": "sds",
    "settings": "settings",
    "sms-settings": "sms-settings",
    "tether": "tether",
    "to-do": "todos",
    "vendor": "vendor",
}


def device_of(name: str) -> str:
    lower = name.lower()
    if "ipad pro" in lower or re.search(r"(?:^|[-_])tablet(?:[-_.]|$)", lower):
        return "tablet"
    if "pixel 10" in lower or re.search(r"(?:^|[-_])phone(?:[-_.]|$)", lower):
        return "phone"
    if re.search(r"(?:^|[-_])desktop(?:[-_.]|$)", lower):
        return "desktop"
    return "desktop"


def theme_of(path: Path) -> str:
    lower = path.name.lower()
    if re.search(r"(?:^|[-_])dark(?:[-_.]|$)", lower):
        return "dark"
    if re.search(r"(?:^|[-_])light(?:[-_.]|$)", lower):
        return "light"
    with Image.open(path) as im:
        sample = im.convert("RGB").resize((48, 48))
        pixels = list(sample.getdata())
        avg = sum(sum(c) for c in pixels) / (len(pixels) * 3)
    return "light" if avg >= 120 else "dark"


def base_key(name: str) -> str:
    n = re.sub(r"\(Pixel 10\)|\(iPad Pro\)", "", name)
    n = re.sub(r"\s*\(\d+\)", "", n)
    n = n.replace(".png", "")
    n = re.sub(r"^sales1\.fullvue\.io_?", "", n)
    n = re.sub(r"^foundtech\.fullvue\.io_?", "", n)
    # Strip explicit device/theme suffixes used by some exports (e.g. counter-desktop-dark).
    n = re.sub(r"[-_]?(?:desktop|tablet|phone)[-_]?(?:dark|light)$", "", n, flags=re.I)
    n = re.sub(r"[-_]?(?:dark|light)$", "", n, flags=re.I)
    return n.strip("_").strip("-").strip() or "main"


def resolve_slug(folder: str, key: str) -> str | None:
    if (folder, key) in SLUG_MAP:
        return SLUG_MAP[(folder, key)]
    if folder in FOLDER_SLUG:
        return FOLDER_SLUG[folder]
    return None


def crop_top(im: Image.Image, aspect_w: float, aspect_h: float) -> Image.Image:
    w, h = im.size
    target_h = int(w * aspect_h / aspect_w)
    if target_h >= h:
        target_w = int(h * aspect_w / aspect_h)
        if target_w < w:
            left = (w - target_w) // 2
            return im.crop((left, 0, left + target_w, h))
        return im.copy()
    return im.crop((0, 0, w, target_h))


def export_one(src: Path, dest: Path, device: str) -> tuple[int, int]:
    with Image.open(src) as im:
        im = im.convert("RGB")
        if device == "desktop":
            cropped = crop_top(im, 16, 10)
            max_w = 1920
        elif device == "tablet":
            cropped = crop_top(im, 3, 4)
            max_w = 1200
        else:
            cropped = crop_top(im, 9, 16)
            max_w = 720
        if cropped.width > max_w:
            nh = int(cropped.height * max_w / cropped.width)
            cropped = cropped.resize((max_w, nh), Image.Resampling.LANCZOS)
        dest.parent.mkdir(parents=True, exist_ok=True)
        cropped.save(dest, "WEBP", quality=82, method=6)
        return cropped.size


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    cands: dict[str, dict[str, dict[str, Path]]] = defaultdict(lambda: defaultdict(dict))

    for path in sorted(SRC.rglob("*.png")):
        folder = path.parent.name
        device = device_of(path.name)
        theme = theme_of(path)
        key = base_key(path.name)
        slug = resolve_slug(folder, key)
        if slug is None:
            print(f"SKIP unmapped: {folder}/{path.name} key={key!r}")
            continue
        prev = cands[slug][device].get(theme)
        if prev is None or len(path.name) < len(prev.name):
            cands[slug][device][theme] = path

    manifest: dict = {}
    for slug, devices in sorted(cands.items()):
        manifest[slug] = {}
        for device, themes in sorted(devices.items()):
            manifest[slug][device] = {}
            for theme, src in sorted(themes.items()):
                dest = OUT / slug / f"{device}-{theme}.webp"
                size = export_one(src, dest, device)
                src_rel = src.relative_to(ROOT).as_posix()
                if "callback_code=" in src.name or "token=" in src.name:
                    src_rel = f"images/{src.parent.name}/[sanitized].png"
                manifest[slug][device][theme] = {
                    "src": src_rel,
                    "out": dest.relative_to(ROOT).as_posix(),
                    "size": list(size),
                }
                print(f"OK {dest.relative_to(ROOT)} <- {src.name} ({size[0]}x{size[1]})")

    (OUT / "manifest.json").write_text(json.dumps(manifest, indent=2) + "\n", encoding="utf-8")
    print(f"\nWrote {OUT / 'manifest.json'}")
    print("Slugs:", ", ".join(manifest.keys()))


if __name__ == "__main__":
    main()
