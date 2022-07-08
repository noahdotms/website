<script lang='ts'>
  import { config } from '../../stores/config';
</script>

<div class='flex items-center space-x-3.5 pr-2 sm:pr-0'>
  <a href={`https://github.com/${$config.github}`} target='_blank'
  rel='noreferrer'>
    <img src='/icons/github.svg' alt='Github icon'
    class='opacity-50 hover:opacity-75' />
  </a>

  <a href={`https://twitter.com/${$config.twitter}`} target='_blank'
  rel='noreferrer'>
  <img src='/icons/twitter.svg' alt='Twitter icon'
    class='opacity-50 hover:opacity-75' />
  </a>
</div>