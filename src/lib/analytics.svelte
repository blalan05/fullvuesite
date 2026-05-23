<script lang="ts">
  import { page } from '$app/state';

  $effect(() => {
    const pathname = page.url.pathname;
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('config', 'G-RDLSJ6V11K', {
        page_title: document.title,
        page_path: pathname,
      });
    }
  });
</script>

<svelte:head>
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-RDLSJ6V11K"></script>
  <script>
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }

    gtag('js', new Date());
    gtag('config', 'G-RDLSJ6V11K');
  </script>
</svelte:head>
