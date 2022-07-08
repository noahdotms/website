<script lang='ts'>
  export let name: string;
  export let icon: string;
</script>

<div class='cursor-default font-normal text-sm flex space-x-2 items-center px-2.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 duration-100 ease-in-out transition-all border-[0.5px] border-white/10 hover:border-white/40 text-neutral-100/80 hover:text-neutral-100/90 group'>
  <img src={`/icons/${icon}.svg`}
  alt={`${name} icon`} class='w-[1.2rem] h-[1.2rem] opacity-[88%] group-hover:opacity-[98%]' />
  <span>{name}</span>
</div>