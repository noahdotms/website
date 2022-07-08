<script lang='ts'>
  import { config } from '../stores/config';
</script>

<footer class='w-full flex justify-center'>
  <div class='flex flex-col items-start justify-start w-full max-w-3xl'>
    <div class='bg-neutral-50/10 p-[.069rem] rounded-full w-full' />
    <div class='px-6 py-8 text-neutral-100/60'>
      <p class='font-semibold text-2xl'>
        {$config.name}
      </p>
      <p class='text-sm font-light'>Software Engineer • {$config.url} • 2022</p>
    </div>
  </div>
</footer>