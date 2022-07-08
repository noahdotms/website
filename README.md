# noah.ms

This is my personal website created with SvelteKit, TailwindCSS and TypeScript.

## Usage

Feel free to use this code for your own personal site as well!

### Github, Twitter and Name

Edit the code in `./src/stores/config.ts` with your info. This app uses the Github API to calculate your total stars + forks across public repositories.

```bash
# ./src/stores/config.ts
export const info = {
  name: 'Noah',
  url: 'noah.ms',
  github: 'noahdotms',
  twitter: 'noahdotms'
}
```

### Supabase

This app utilizes a Supabase server for handling messages. To set this up, create a `.env` file in the base directory.

```bash
# .env
VITE_SUPABASE_URL=""
VITE_SUPABASE_KEY=""
```

If you use this code, please leave a referrence to my [website](https://noah.ms) :)