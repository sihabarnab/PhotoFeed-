# PhotoFeed

PhotoFeed is a multilingual photo feed web application built with [Next.js](https://nextjs.org/), supporting English and Bengali, styled with Tailwind CSS.

## Features

- Next.js 14 App Router
- Dynamic locale routing with middleware
- API routes for photo data ([app/api/photos/](app/api/photos/route.js))
- Responsive UI with Tailwind CSS
- ESLint for code quality
- Custom fonts with `next/font/local`
- Example components: [`Logo`](components/Logo.jsx), [`Navbar`](components/Navbar.jsx)
- Sample photo data in [`lib/image-data.js`](lib/image-data.js)

## Getting Started

### Install dependencies

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Lint

```bash
npm run lint
```

### Build

```bash
npm run build
```

### Start (production)

```bash
npm start
```

## Project Structure

- `app/` - App directory (routing, pages, API, localization)
- `components/` - Reusable UI components
- `lib/` - Utility libraries and data
- `public/` - Static assets (images, icons)
- `middleware.js` - Locale detection and redirection
- `tailwind.config.js` & `postcss.config.mjs` - Styling configuration

## Localization

- English and Bengali dictionaries in [`app/[lang]/dictionaries/`](app/[lang]/dictionaries/)
- Locale is auto-detected and routed via [`middleware.js`](middleware.js)

## API Endpoints

- `GET /api/photos` - All photos ([app/api/photos/route.js](app/api/photos/route.js))
- `GET /api/photos/[id]` - Photo by ID ([app/api/photos/[id]/route.js](app/api/photos/[id]/route.js))

## Continuous Integration

- GitHub Actions workflow in [`.github/workflows/ci.yml`](.github/workflows/ci.yml) runs lint, tests, and build on push/pull request to `main`.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
