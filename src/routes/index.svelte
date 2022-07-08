<script lang='ts'>
  import { github } from '../stores/github';
  import { config } from '../stores/config';
  import PortfolioItem from '$lib/PortfolioItem.svelte';
  import TechStackItem from '$lib/TechStackItem.svelte';
</script>

<section class='space-y-12'>
  <div class='space-y-2 sm:space-y-3'>
    <h1 class='font-bold text-4xl sm:text-5xl tracking-wide'>
      Hey, I&apos;m {$config.name} 👋
    </h1>
    <div class='font-light text-neutral-100/80'>
      I&apos;m a fullstack software engineer based in Chicago. I am passionate about building open-source and scalable applications with thoughtful user experiences, like
      <div class='group inline-flex items-center justify-center'>
      <a href='https://github.com/noahdotms/website' rel='noreferrer' target='_blank'class='hover:underline font-medium text-neutral-100/80 hover:text-neutral-100/90'>this site.</a>
        <div class='backdrop-blur rounded-lg bg-white/5 border-[0.1px] border-white/10 space-x-1.5  transition-all duration-200 ease-in-out
        group-hover:scale-100 scale-0 flex flex-col absolute mt-16 pointer-events-none px-1 py-1 text-[.69rem] font-medium origin-top shadow-sm'>
          <div class='flex space-x-1'>
            <p class='rounded-lg px-1.5 py-1 bg-white/10 shadow-inner'>
              ⭐ {$github.siteStars}
            </p>
            <p class='rounded-lg px-1.5 py-1 bg-white/10 shadow-inner'>
              🍴 {$github.siteForks}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class='space-y-2'>
    <h2 class='font-semibold text-2xl sm:text-[1.67rem] tracking-wide'>
      What I Do 🛠️
    </h2>
    <p class='font-light text-neutral-100/80'>
      I am currently working as a freelance software engineer and UI/UX developer. In my free time, I build software solutions for integrating blockchains in daily use. I focus on building responsive, mobile-first web applications from the ground up. I've also developed browser games, token-gated e-commerce solutions and other open-source software; totaling ⭐ {$github.stars} stars and 🍴 {$github.forks} forks.
    </p>
    <div class='grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-2'>
      <PortfolioItem name='Dragonia GG' link='https://dragonia.gg' description='🐉 🃏 Dragonia is a mobile-compatible browser game and smart contract protocol built on the Optimism blockchain. I wrote each line of code & designed the UI and system architecture used in the multi-contract protocol.' techStack={['TypeScript', 'React.js', 'Next.js', 'TailwindCSS', 'Solidity', 'ERC721A', 'ethers.js', 'wagmi.sh', 'Hardhat', 'Python']} />
      <PortfolioItem name='Primal Beasts' link='https://primalbeasts.io' description='🐯 I consulted and built a NFT & allowlist marketplace; integrating web3 token-payments with a sql-database inventory. I developed the entire frontend and a cross-chain purchasing solution as well.' techStack={['TypeScript', 'React.js', 'Next.js', 'TailwindCSS', 'Solidity', 'ERC20', 'ethers.js', 'web3-react', 'Hardhat', 'Supabase']} />
      <PortfolioItem name='web3-link-tree' link='https://github.com/noahdotms/web3-link-tree' description='(🔗, 🌲) Web3 Link Tree is a free & open-source alternative to Linktree built with React.js, Next.js, Tailwind and Web3-React.' techStack={['TypeScript', 'React.js', 'Next.js', 'TailwindCSS', 'ethers.js', 'web3-react']} />
      <PortfolioItem name='glory-to-ukraine' link='https://github.com/noahdotms/glory-to-ukraine' description='🇺🇦 Web3-enabled Ethereum donation portal for Ukraine.' techStack={['TypeScript', 'React.js', 'Next.js', 'TailwindCSS', 'ethers.js', 'web3-react']} />
    </div>
  </div>

  <div class='space-y-2'>
    <h3 class='font-semibold text-2xl sm:text-[1.67rem] tracking-wide'>
      Tech Stack 💻
    </h3>
    <p class='font-light text-neutral-100/80'>
      These are the most significant tools I use at the moment. Fun fact, Angular was the first framework I've learned, and inspired my love for front-end development!
    </p>
    <div class='flex flex-wrap gap-1.5 pt-2'>
      <TechStackItem name='TypeScript' icon='typescript' />
      <TechStackItem name='React.js' icon='react' />
      <TechStackItem name='Next.js' icon='next' />
      <TechStackItem name='Svelte' icon='svelte' />
      <TechStackItem name='TailwindCSS' icon='tailwind' />
      <TechStackItem name='Solidity' icon='solidity' />
      <TechStackItem name='Python' icon='python' />
      <TechStackItem name='Node.js' icon='node' />
      <TechStackItem name='Yarn' icon='yarn' />
      <TechStackItem name='GraphQL' icon='graphql' />
      <TechStackItem name='Supabase' icon='supabase' />
      <TechStackItem name='Java' icon='java' />
      <TechStackItem name='Git' icon='git' />
      <TechStackItem name='AWS' icon='aws' />
      <TechStackItem name='Figma' icon='figma' />
    </div>
  </div>
</section>