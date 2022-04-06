<img src="./images/rodneylab-github-sveltekit-share-buttons.png" alt="Rodney Lab sveltekit-share-buttons Github banner">

<p align="center">
  <a aria-label="Open Rodney Lab site" href="https://rodneylab.com" rel="nofollow noopener noreferrer">
    <img alt="Rodney Lab logo" src="https://rodneylab.com/assets/icon.png" width="60" />
  </a>
</p>
<h1 align="center">
  SvelteKit Share Buttons
</h1>

# sveltekit-share-buttons

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/rodneylab/sveltekit-share-buttons)

Code showing how to use the Web Share API with progressive enchancements to add social share buttons to a Svelte app. The code accompanies the <a aria-label="Open Rodney Lab post on Svelte share buttons" href="https://rodneylab.com/svelte-share-buttons/">post on Svelte share buttons</a>. If you have any questions, please drop a comment at the bottom of that page.

## Building and previewing the site

If you're seeing this, you've probably already done this step. Congrats!

```bash
git clone https://github.com/rodneylab/svelte-share-buttons.git
cd svelte-share-buttons
pnpm install # or npm install
cp .env.EXAMPLE .env
pnpm run dev
```

## Building

```bash
pnpm run build
```

> You can preview the built app with `pnpm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.

CREDIT: button sharing code based on https://github.com/nygardk/react-share by Klaus Nygård.
