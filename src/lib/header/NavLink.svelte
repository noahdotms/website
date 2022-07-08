<script lang='ts'>
  export let href: string;
  export let name: string;
</script>

<a href={href} class='px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 border-[0.5px] border-white/20 hover:border-white/40 backdrop-blur-sm hover:scale-95 transition-all ease-in-out duration-200'>
  {name}
</a>