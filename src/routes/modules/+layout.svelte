<script>
	import { page } from '$app/stores';
</script>
{#if $page.data.pageTitle}
<nav class="breadcrumb">
  <li><a href="/modules">Modules</a></li>
  >>
  <li>{$page.data.pageTitle}</li>
</nav>
{/if}
<article>
  <slot></slot>
</article>
<style lang="scss">
  nav.breadcrumb {
    padding: 1em;
    li {
      display: inline-block;
      list-style: none;
      a {
        text-decoration: none;
      }
    }
  }
</style>