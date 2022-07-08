<script lang='ts'>
  import MenuButton from '$lib/header/MenuButton.svelte';
  import NavLink from './NavLink.svelte';
  import MediaLinks from './MediaLinks.svelte';
  
  let menuActive: boolean = false;
  let currY: number = 0;
  $: scrolled = currY > 0
</script>

<svelte:window bind:scrollY={currY} />

<!-- Mobile Header -->
<header class='sticky top-0 flex w-screen sm:hidden justify-center z-10'>
  <nav class='absolute flex m-4 w-11/12 transition-all duration-[250ms] ease-in-out flex-col'
  class:m-0={scrolled || menuActive} class:w-[100%]={scrolled || menuActive}>
    <div class='flex justify-between w-full bg-[#181818] py-2 px-3.5 shadow rounded-xl
    border-[0.5px] border-white/40'
    class:border-[0]={scrolled || menuActive} class:rounded-[0]={scrolled || menuActive}>
      <div on:click={() => menuActive = !menuActive}>
        <MenuButton open={menuActive} />
      </div>

      <MediaLinks />
    </div>

    {#if menuActive}
    <div class='bg-black/95 backdrop-blur-md p-6 h-full min-h-screen flex space-y-3 flex-col w-full
    tracking-wide font-mono z-0 relative'
    on:click={() => menuActive = false}>
      <a class='text-white/75 hover:text-white/90' href='/'>
        /home
      </a>
      <a class='text-white/75 hover:text-white/90' href='/about'>
        /about
      </a>
      <a class='text-white/75 hover:text-white/90' href='/contact'>
        /contact
      </a>
    </div>
    {/if}
  </nav>
</header>

<!-- Desktop Header -->
<header class='max-w-3xl hidden sm:flex w-full justify-center py-9'>
  <div class='flex w-full justify-between'>
    <nav class='flex text-[.8rem] space-x-3 font-mono'>
      <NavLink name='/home' href='/' />
      <NavLink name='/about' href='/about' />
      <NavLink name='/contact' href='/contact' />
    </nav>

    <MediaLinks />
  </div>
</header>