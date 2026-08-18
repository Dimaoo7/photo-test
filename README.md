# Dmitry Kriukov

> Photographer portfolio and private client gallery for Montenegro.

Minimal editorial portfolio for **Dmitry Kriukov**, focused on wedding stories, portraits and quiet, atmospheric frames from the Adriatic coast.

The project is built with Astro and Tailwind CSS. It includes a bilingual interface, animated photo galleries and client-friendly downloads without requiring a backend for the current demo.

## Highlights

- English-first interface with `EN / RU` language switcher.
- Language preference saved in `localStorage`.
- Portfolio index with reusable album cards.
- Static album pages generated from a single data file.
- In-page lightbox instead of opening photos in a new tab.
- Individual photo downloads in `JPEG` or `WEBP`.
- Full album download as a `ZIP` archive in the selected format.
- Scroll-based reveal animation for album cards and photographs.
- Camera intro animation on every page.
- Open Graph, Twitter Card and Schema.org metadata.
- Responsive layout for desktop and mobile screens.
- Astro static output, ready for deployment to a static host.

## Tech Stack

| Tool | Purpose |
| --- | --- |
| [Astro](https://astro.build/) | Static site framework and routing |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling |
| [Vite](https://vite.dev/) | Asset and development tooling |
| [Unsplash](https://unsplash.com/) | Temporary demo image source |

## Getting Started

Requirements:

- Node.js `22.12.0` or newer
- npm

Install dependencies:

```sh
npm install
```

Start the development server:

```sh
npm run dev
```

The site will be available at `http://localhost:4321`.

Create a production build:

```sh
npm run build
```

Preview the production build locally:

```sh
npm run preview
```

## Routes

| Route | Description |
| --- | --- |
| `/` | Homepage, selected stories, about section and contact CTA |
| `/portfolio` | Complete portfolio and album index |
| `/albums/[slug]` | Generated photo gallery for an individual album |

Current demo albums:

- `/albums/milena-and-marko`
- `/albums/quiet-kotor`

## Project Structure

```text
src/
├── components/
│   ├── AlbumCard.astro       # Reusable portfolio card
│   └── PhotoGallery.astro    # Lightbox and download controls
├── data/
│   └── albums.ts              # Albums, photos and translations
├── layouts/
│   └── Layout.astro          # Shared metadata, navigation and scripts
├── pages/
│   ├── index.astro           # Homepage
│   ├── portfolio.astro       # Portfolio index
│   └── albums/[slug].astro   # Dynamic album route
└── styles/
		└── global.css            # Tailwind import and global animations

public/
├── favicon.svg
├── favicon.ico
└── robots.txt
```

## Adding an Album

Albums are managed in [src/data/albums.ts](src/data/albums.ts). Add a new object to the `albums` array with:

- a unique `slug`;
- English and Russian titles;
- English and Russian category, location and description;
- a cover image;
- a list of photos with download URLs;
- English and Russian photo captions.

Example shape:

```ts
{
	slug: 'new-story',
	title: 'New Story',
	titleRu: 'Новая история',
	category: 'Portrait session',
	categoryRu: 'Портретная съемка',
	location: 'Kotor, Montenegro',
	locationRu: 'Котор, Черногория',
	date: '12 / 06 / 2025',
	description: 'A short English description.',
	descriptionRu: 'Короткое описание на русском.',
	cover: 'https://example.com/cover.jpg',
	accent: 'series',
	photos: [],
}
```

The dynamic route is generated automatically by `getStaticPaths()`.

## Image Downloads

The current demo uses image URLs hosted by Unsplash. The browser fetches the selected images and creates a ZIP archive on the client side.

For production client galleries, replace the demo URLs with images from a storage provider such as:

- Cloudflare R2;
- Amazon S3;
- Backblaze B2;
- Cloudinary;
- Supabase Storage.

For private client albums, add authentication or signed, expiring URLs before using the gallery with real customer photos.

## SEO and Performance

The shared layout includes:

- page titles and descriptions;
- Open Graph metadata;
- Twitter Card metadata;
- Schema.org `ProfessionalService` data;
- `robots.txt`;
- image `sizes`, lazy loading and async decoding;
- `preconnect` to the image host.

Before launch, replace the demo metadata with the final domain, contact email, social profile URLs and a real photographer description. A sitemap and `hreflang` links should also be added when separate `/en` and `/ru` routes are introduced.

## Deployment

Build output is generated in `dist/`:

```sh
npm run build
```

The static output can be deployed to Netlify, Vercel, Cloudflare Pages, GitHub Pages or any server that can serve static files.

## License

This repository is a private portfolio project. Replace the demo images and copy with assets you own or have permission to publish before deploying publicly.
