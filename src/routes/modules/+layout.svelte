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

<a href="#top" class="btt">Top</a>
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
  .btt {
    background: #416a98;
    color: white;
    text-decoration: none;
    position: fixed;
    bottom: 1em;
    right: 1em;
    padding: 1em 1em;
  }
</style>