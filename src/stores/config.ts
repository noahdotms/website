import { writable, type Writable } from 'svelte/store';

export const config: Writable<any> = writable([]);

export const info = {
  name: 'Noah',
  url: 'noah.ms',
  github: 'noahdotms',
  twitter: 'noahdotms'
}

config.set(info);