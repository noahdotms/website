<script lang='ts'>
  export let name: string;
  export let description: string;
  export let link: string;
  export let techStack: string[];
  let opened: boolean;
</script>

<div class:h-full={opened} class:h-fit={!opened} class='rounded-lg border-[0.5px] border-white/20 hover:border-white/40 flex flex-col bg-white/5 hover:bg-white hover:bg-opacity-[6.9%] backdrop-blur-sm w-full transition-all duration-200 ease-in-out text-neutral-100/90 hover:text-neutral-100'>
  <div class='cursor-pointer px-4 py-3 group flex justify-between items-center w-full select-none'
  on:click={() => {
    opened = !opened;
  }}>
    <div class='font-medium'>
      {name}
    </div>

    <div class='px-2 py-1.5 font-serif shadow-inner rounded-full group-hover:bg-white/10 transition-all duration-200 ease-in-out'>
      <img src='/icons/chevron.svg' alt='Expand icon' class='w-2 opacity-75 hover:opacity-90 transition-all duration-150 ease-in-out' class:rotate-90={opened} />
    </div>
  </div>

  <div class='h-[.069rem] w-full bg-white/20' class:hidden={!opened} />

  <div class='p-3.5 justify-between h-full flex flex-col space-y-3' class:hidden={!opened}>
    <div class='font-light text-sm'>
      {description}
    </div>

    <div class='flex flex-wrap gap-1'>
      {#each techStack as tech}
      <div class='rounded-full px-2 py-1 text-xs font-light bg-white bg-opacity-[8%]'>
        {tech}
      </div>
      {/each}
    </div>

    <a class='rounded-full px-2.5 py-1.5 text-sm bg-white/5 hover:bg-white/10 hover:scale-95 transition-all duration-300 ease-in-out w-fit self-end tracking-wide font-medium border-[0.5px] border-white/10 hover:border-white/30'
    href={link} target='_blank' rel='noreferrer'>
      View Project
    </a>
  </div>
</div>