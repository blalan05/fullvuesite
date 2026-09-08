import { browser } from '$app/environment';

export type SiteTheme = 'light' | 'dark';

const STORAGE_KEY = 'fv-site-theme';

function readStored(): SiteTheme | null {
	if (!browser) return null;
	const raw = localStorage.getItem(STORAGE_KEY);
	return raw === 'light' || raw === 'dark' ? raw : null;
}

function systemPrefersDark(): boolean {
	if (!browser || !window.matchMedia) return true;
	return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function applyDom(theme: SiteTheme) {
	if (!browser) return;
	document.documentElement.dataset.theme = theme;
	document.documentElement.style.colorScheme = theme;
}

function resolveInitial(): SiteTheme {
	if (browser) {
		const painted = document.documentElement.dataset.theme;
		if (painted === 'light' || painted === 'dark') return painted;
	}
	return readStored() ?? (systemPrefersDark() ? 'dark' : 'light');
}

/** Reactive site theme — screenshots and chrome follow this. */
class ThemeState {
	current: SiteTheme = $state('dark');

	constructor() {
		if (browser) {
			this.hydrate();
		}
	}

	/** Align store with FOUC script / localStorage (SSR + HMR safe). */
	hydrate() {
		if (!browser) return;
		const next = resolveInitial();
		this.current = next;
		applyDom(next);
	}

	set(theme: SiteTheme) {
		this.current = theme;
		if (browser) {
			localStorage.setItem(STORAGE_KEY, theme);
			applyDom(theme);
		}
	}

	toggle() {
		this.set(this.current === 'dark' ? 'light' : 'dark');
	}
}

type ThemeGlobal = typeof globalThis & { __fvSiteTheme?: ThemeState };

/** One shared instance across SSR/HMR module duplicates. */
export const theme: ThemeState =
	(globalThis as ThemeGlobal).__fvSiteTheme ??
	((globalThis as ThemeGlobal).__fvSiteTheme = new ThemeState());
