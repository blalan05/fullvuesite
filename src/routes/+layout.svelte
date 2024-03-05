<script lang="ts">
  import Analytics from "$lib/analytics.svelte";
	import { page } from '$app/stores'

  const menuItems = [
    { title: "Home", link: "/" },
    { title: 'What is ERP?', link: '/erp' },
    { title: "Modules", link: "/modules" },
    { title: "Industries", link: "/industries" },
    { title: "Pricing", link: "/pricing" },
    { title: "Contact", link: "/contact" },
  ];

  let menuToggle
  let openMenu = false
  const closeMenu = () => openMenu = false
</script>

<svelte:head>
  <title>{ $page.data.metaTitle }</title>
  <meta name="description" content={ $page.data.metaDescription } />
  <meta name="keywords" content={ $page.data.metaKeywords } />
</svelte:head>
<Analytics />
<nav class="mainNav">
  <ul>
    {#each menuItems as item}
      <li><a href={item.link} title={item.title}>{item.title}</a></li>
    {/each}
  </ul>
</nav>

<nav class="mobileNav">
  <div class="navbar">
    <div class="container nav-container">
      <label for="menuToggle" style="display: none"/>
      <input class="checkbox" type="checkbox" bind:checked={openMenu} name="menuToggle" id="menuToggle" bind:this={menuToggle} />
      <div class="hamburger-lines" on:click={openMenu != openMenu}>
        <span class="line line1"></span>
        <span class="line line2"></span>
        <span class="line line3"></span>
      </div>
      <div class="menu-items">
        {#each menuItems as item}
          <li><a href={item.link} title={item.title} on:click={closeMenu}>{item.title}</a></li>
        {/each}
      </div>
    </div>
  </div>
</nav>

<main>
  <slot />
</main>

<footer>
  FullVue developed by <a href="https://foundtechsolutions.com" title="Foundational Technologies LLC">FoundTech</a>
  <a href="/privacypolicy" title="Privacy Policy" class="ml-2">Privacy Policy</a>
  <a href="/termsofuse" title="Terms of Use" class="ml-2">Terms of Use</a>
  <span style="display: inline-block" class="ml-2">Copyright &copy; {Intl.DateTimeFormat('en-us', { year: 'numeric'}).format(new Date())}</span>
</footer>

<style lang="scss">
  .mainNav {
    display: none;
  }

  .mobileNav {
    z-index: 97;
    position: sticky;
    top: 0;
    background-color: #416a98;
    .navbar {
      width: 100%;
      box-shadow: 0 1px 4px rgb(146 161 176 / 15%);
      .container {
        margin: auto;
        &.nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 62px;
          .checkbox {
            position: absolute;
            display: block;
            height: 32px;
            width: 32px;
            top: 20px;
            left: 20px;
            z-index: 105;
            opacity: 0;
            cursor: pointer;
          }
          .hamburger-lines {
            display: flex;
            height: 26px;
            width: 32px;
            position: absolute;
            top: 17px;
            left: 20px;
            z-index: 102;
            flex-direction: column;
            justify-content: space-between;
            .line {
              display: block;
              height: 4px;
              width: 100%;
              border-radius: 10px;
              background: #fff;
              &.line1 {
                transform-origin: 0% 0%;
                transition: transform 0.4s ease-in-out;
              }
              &.line2 {
                transition: transform 0.2s ease-in-out;
              }
              &.line3 {
                transform-origin: 0% 100%;
                transition: transform 0.4s ease-in-out;
              }
            }
          }
          .menu-items {
            padding: 320px 0 18px 0;
            background: #416a98;
            box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.5);
            width: 100%;
            transform: translate(-150%);
            display: flex;
            flex-direction: column;
            transition: transform 0.5s ease-in-out;
            text-align: center;
            z-index: 99;
            li {
              font-size: 1.5rem;
              font-weight: 500;
              list-style: none;
              a {
                text-decoration: none;
                color: #fff;
                font-weight: 500;
                font-size: 1.2rem;
                padding: 0.7rem;
              
                &:hover {
                  font-weight: bold;
                }
              }
            }
          }
  
          input[type="checkbox"]:checked ~ .menu-items {
            transform: translateX(0);
          }
  
          input[type="checkbox"]:checked ~ .hamburger-lines .line1 {
            transform: rotate(45deg);
          }
  
          input[type="checkbox"]:checked ~ .hamburger-lines .line2 {
            transform: scaleY(0);
          }
  
          input[type="checkbox"]:checked ~ .hamburger-lines .line3 {
            transform: rotate(-45deg);
          }
        }
      }
    }
  }

footer {
  position: sticky;
  bottom: 0;
  text-align: right;
  padding: 6px 8px;
  background-color: #416a98;
  color: white;
  a {
    color: white;
    text-decoration: none;
    &.ml-2 {
      display: inline-block;
      margin-left: 2em;
    }
  }
}
</style>
