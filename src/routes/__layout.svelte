<script>
  import { config } from '../stores/config';
  import Footer from '$lib/Footer.svelte';
  import Header from '$lib/header/Header.svelte';
  import '../app.css'
</script>

<svelte:head>
  <title>{$config.name}</title>
  <meta name='description' content='This site was built by noah.ms' />
</svelte:head>

<main class='text-neutral-100 flex flex-col items-center mx-6'>
  <Header />
  <section class='max-w-3xl w-full flex pt-24 sm:pt-4 pb-12'>
    <slot />
  </section>
  <Footer />
</main>