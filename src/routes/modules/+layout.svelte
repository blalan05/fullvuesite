<script>
	import { page } from '$app/stores'
</script>
{#if $page.data.pageTitle}
<nav class="breadcrumb">
  <li><a href="/modules">Modules</a></li>
  >>
  <li>{$page.data.pageTitle}</li>
</nav>
{/if}
<article id="top">
  <slot></slot>
</article>

<a href="#top" class="btt">Top</a>
<style lang="scss">
  article {
    padding: 0 12px;
  }
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
    bottom: 3em;
    right: 1em;
    padding: 1em 1em;
    border-radius: 5px;
  }
  @media screen and (min-width: 920px) {
    nav {
      max-width: 920px;
      margin: 0 auto;
    }
    article {
      max-width: 920px;
      margin: 0 auto;
    }
  }
  @media screen and (min-width: 1200px) {
    nav {
      max-width: 1200px;
    }
    article {
      max-width: 1200px;
    }
  }
</style>