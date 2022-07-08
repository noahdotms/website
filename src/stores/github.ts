import { writable, type Writable } from 'svelte/store';
import { info } from './config';

export const github: Writable<any> = writable([]);

const fetchGithubRepos = async () => {
  const url: string = `https://api.github.com/users/${info.github}/repos`;
  const res = await fetch(url);
  const data = await res.json();

  let repos = [];
  let totalStars: number = 0;
  let totalForks: number = 0;
  let siteStars: number = 0;
  let siteForks: number = 0;

  for (let i = 0; i < data.length; i++) {
    repos.push({
      name: data[i].name,
      description: data[i].description,
      stars: data[i].stargazers_count,
      forks: data[i].forks_count
    });

    totalStars += data[i].stargazers_count;
    totalForks += data[i].forks_count;

    if (data[i].name === 'website') {
      siteStars = data[i].stargazers_count;
      siteForks = data[i].forks_count;
    }
  }
  
  github.set({
    repos: repos,
    stars: totalStars,
    forks: totalForks,
    siteStars: siteStars,
    siteForks: siteForks,
  });
}

fetchGithubRepos();