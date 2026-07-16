<script lang="ts">
  import Analytics from '$lib/analytics.svelte';
  import { browser } from '$app/environment';
  import { page } from '$app/state';
  import type { Snippet } from 'svelte';

  interface Props {
    children: Snippet;
  }

  let { children }: Props = $props();

  const isAppLauncher = $derived(page.data.isAppLauncher ?? false);

  $effect(() => {
    if (!browser) {
      return;
    }

    document.body.classList.toggle('app-launcher', isAppLauncher);

    return () => {
      document.body.classList.remove('app-launcher');
    };
  });

  $effect(() => {
    if (!browser || !isAppLauncher) {
      return;
    }

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(() => {
        // Installability is best-effort; ignore registration failures.
      });
    }
  });

  const menuItems = [
    { title: 'Home', link: '/' },
    { title: 'What is ERP?', link: '/erp' },
    { title: 'Modules', link: '/modules' },
    { title: 'Industries', link: '/industries' },
    { title: 'Pricing', link: '/pricing' },
    { title: 'Contact', link: '/contact' },
  ];

  let openMenu = $state(false);
  const closeMenu = () => (openMenu = false);
  const toggleMenu = () => (openMenu = !openMenu);

  const navIsActive = (link: string) => {
    const p = page.url.pathname;
    if (link === '/') return p === '/';
    return p === link || p.startsWith(`${link}/`);
  };
</script>

<svelte:head>
  <title>{page.data.metaTitle}</title>
  <meta name="description" content={page.data.metaDescription} />
  <meta name="keywords" content={page.data.metaKeywords} />
  {#if isAppLauncher}
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
    <meta name="theme-color" content="#417505" />
    <meta name="mobile-web-app-capable" content="yes" />
    <link rel="manifest" href="/manifest.webmanifest" />
    <link rel="icon" href="/icons/icon-192x192.png" />
    <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
  {/if}
</svelte:head>

{#if isAppLauncher}
  {@render children()}
{:else}
<Analytics />

<nav class="mainNav" aria-label="Primary">
  <div class="mainNav-inner">
    <ul>
      {#each menuItems as item}
        <li>
          <a
            href={item.link}
            title={item.title}
            class:is-active={navIsActive(item.link)}
            aria-current={navIsActive(item.link) ? 'page' : undefined}
            >{item.title}</a
          >
        </li>
      {/each}
    </ul>
  </div>
</nav>

<nav class="mobileNav" aria-label="Primary mobile">
  <div class="navbar">
    <div class="container nav-container" class:nav-open={openMenu}>
      <button
        type="button"
        class="hamburger-lines"
        aria-label={openMenu ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={openMenu}
        aria-controls="mobile-menu-panel"
        onclick={toggleMenu}
      >
        <span class="line line1"></span>
        <span class="line line2"></span>
        <span class="line line3"></span>
      </button>
      <div class="menu-items" id="mobile-menu-panel">
        {#each menuItems as item}
          <li>
            <a
              href={item.link}
              title={item.title}
              class:is-active={navIsActive(item.link)}
              aria-current={navIsActive(item.link) ? 'page' : undefined}
              onclick={closeMenu}>{item.title}</a
            >
          </li>
        {/each}
      </div>
    </div>
  </div>
</nav>

<main class="site-main">
  {@render children()}
</main>

<footer>
  Fullvue developed by
  <a href="https://foundtechsolutions.com" title="Foundational Technologies LLC">FoundTech</a>
  <a href="/privacypolicy" title="Privacy Policy" class="ml-2">Privacy Policy</a>
  <a href="/termsofuse" title="Terms of Use" class="ml-2">Terms of Use</a>
  <span class="ml-2 copyright"
    >Copyright &copy; {Intl.DateTimeFormat('en-us', { year: 'numeric' }).format(new Date())}</span
  >
</footer>
{/if}

<style lang="scss">
  :global(body.app-launcher) {
    background: #f8e71c;
    background-image: none;
    color: #1a1f14;
  }

  .mainNav {
    display: none;
  }

  .mainNav-inner {
    max-width: var(--fv-max-content, 1120px);
    margin: 0 auto;
    padding: 0 var(--fv-space-4, 16px);
  }

  .mainNav ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 0.25rem 1.25rem;
    list-style: none;
    margin: 0;
    padding: 0.65rem 0;
  }

  .mainNav a {
    color: var(--fv-text-muted, #b0b8c4);
    text-decoration: none;
    font-family: var(--fv-font-display, inherit);
    font-weight: 500;
    font-size: 0.9rem;
    padding: 0.4rem 0.75rem;
    border-radius: 999px;
    transition:
      color 0.15s ease,
      background 0.15s ease;

    &:hover {
      color: #fff;
      background: rgba(255, 255, 255, 0.08);
    }

    &.is-active {
      color: #fff;
      background: rgba(65, 106, 152, 0.45);
      box-shadow: 0 0 0 1px rgba(140, 180, 228, 0.25);
    }
  }

  .mobileNav {
    z-index: 97;
    position: sticky;
    top: 0;
    background-color: var(--fv-accent, #416a98);
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);

    .navbar {
      width: 100%;
      box-shadow: 0 2px 12px rgba(0, 0, 0, 0.12);

      .container.nav-container {
        margin: auto;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        min-height: 56px;
        position: relative;

        .hamburger-lines {
          display: flex;
          height: 26px;
          width: 32px;
          position: absolute;
          top: 15px;
          left: 18px;
          z-index: 102;
          flex-direction: column;
          justify-content: space-between;
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;

          .line {
            display: block;
            height: 4px;
            width: 100%;
            border-radius: 10px;
            background: #fff;
            transition:
              transform 0.35s ease,
              opacity 0.2s ease;

            &.line1 {
              transform-origin: 0% 0%;
            }

            &.line3 {
              transform-origin: 0% 100%;
            }
          }
        }

        .menu-items {
          padding: 4.5rem 0 1.25rem;
          background: var(--fv-accent, #416a98);
          width: 100%;
          transform: translateX(-105%);
          display: flex;
          flex-direction: column;
          transition: transform 0.35s ease-out;
          text-align: center;
          z-index: 99;

          li {
            font-size: 1.25rem;
            font-weight: 500;
            list-style: none;

            a {
              display: block;
              text-decoration: none;
              color: rgba(255, 255, 255, 0.92);
              font-weight: 500;
              padding: 0.65rem 1rem;
              transition: background 0.15s ease;

              &:hover {
                background: rgba(0, 0, 0, 0.12);
              }

              &.is-active {
                background: rgba(0, 0, 0, 0.2);
                border-left: 3px solid rgba(200, 220, 255, 0.85);
              }
            }
          }
        }

        &.nav-open .menu-items {
          transform: translateX(0);
        }

        &.nav-open .hamburger-lines .line1 {
          transform: rotate(45deg);
        }

        &.nav-open .hamburger-lines .line2 {
          transform: scaleY(0);
          opacity: 0;
        }

        &.nav-open .hamburger-lines .line3 {
          transform: rotate(-45deg);
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    .mobileNav {
      display: none;
    }

    .mainNav {
      display: block;
      position: sticky;
      top: 0;
      z-index: 97;
      border-bottom: 1px solid var(--fv-border, rgba(255, 255, 255, 0.08));
      background: rgba(23, 26, 31, 0.78);
      backdrop-filter: saturate(160%) blur(14px);
      -webkit-backdrop-filter: saturate(160%) blur(14px);
      box-shadow:
        0 1px 0 rgba(255, 255, 255, 0.04) inset,
        0 12px 40px rgba(0, 0, 0, 0.35);
    }
  }

  footer {
    width: 100%;
    margin-top: var(--fv-space-6, 32px);
    text-align: center;
    padding: var(--fv-space-4, 16px) var(--fv-space-4, 16px);
    background: var(--fv-bg-elevated, #252a32);
    color: var(--fv-text-muted, #b8c0cc);
    font-size: 0.875rem;
    border-top: 1px solid var(--fv-border, rgba(255, 255, 255, 0.08));

    a {
      color: #e8eef5;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }

      &.ml-2 {
        display: inline-block;
        margin-left: 1.25rem;
      }
    }

    .copyright {
      display: inline-block;
      margin-left: 1.25rem;
    }
  }
</style>
