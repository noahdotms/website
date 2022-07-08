<script lang='ts'>
  import { createClient } from '@supabase/supabase-js';
  import TechStackItem from '$lib/TechStackItem.svelte';
  
  let sent: boolean;
  let email: string = '';
  let message: string = '';

  const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY);
  
  const sendMessage = async () => {
    if (email !== '' && message !== '') {
      await supabase.from<any>('contact-form').insert([
        { email, message }
      ]);
      sent = true;
    }
  }
</script>

<section class='space-y-6'>
  <h1 class='text-4xl sm:text-5xl font-semibold tracking-wide'>
    Let's Chat 💬
  </h1>
  <p class='text-neutral-100/80 text-sm'>
    Leave a message with the form below or get in touch via Discord, Twitter or email.
  </p>

  <form class='w-full max-w-xl flex flex-col space-y-4 p-3 rounded-lg shadow border-[0.5px] border-white/20 bg-white/5 backdrop-blur-sm'>
    <label class='flex flex-col'>
      <p class='uppercase tracking-wider text-sm'>e-mail</p>
      <input type='text' bind:value={email} class='bg-white/5 rounded-lg shadow-inner font-light p-1 mt-0.5' />
    </label>
    <label class='flex flex-col'>
      <p class='uppercase tracking-wider text-sm'>message</p>
      <textarea type='text' bind:value={message} class='resize-none bg-white/5 rounded-lg shadow-inner font-light p-1 mt-0.5 h-32' />
    </label>
    <button class='flex items-center space-x-3 rounded-full px-3 py-1 bg-white/5 hover:bg-white/10 hover:scale-95 transition-all duration-300 ease-in-out w-fit self-end tracking-wide font-medium border-[0.5px] border-white/10 hover:border-white/30'
    on:click|preventDefault={sendMessage} class:pointer-events-none|disabled={sent} class:bg-emerald-500={sent}>
      {#if sent}
        <span>Sent</span>
      {:else}
        <span>Send</span>
      {/if}
    </button>
  </form>
  
  <div class='flex flex-wrap gap-1.5'>
    <TechStackItem name='noahdotms #4711' icon='discord' />
    <TechStackItem name='@noahdotms' icon='twitterFill' />
    <TechStackItem name='hi@noah.ms' icon='email' />
  </div>
</section>