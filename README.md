# PhotoFeed

PhotoFeed is a multilingual photo feed web application built with [Next.js 14](https://nextjs.org/), supporting English and Bengali, styled with Tailwind CSS. It demonstrates modern Next.js features, dynamic locale routing, API endpoints, and a responsive UI.

---

## Features

- **Next.js 14 App Router**: Uses the latest routing and layouts.
- **Multilingual Support**: English and Bengali, with dynamic locale routing via middleware.
- **API Routes**: RESTful endpoints for photo data.
- **Responsive UI**: Built with Tailwind CSS for mobile and desktop.
- **Custom Fonts**: Uses `next/font/local` for optimized font loading.
- **Reusable Components**: Includes components like [`Logo`](components/Logo.jsx), [`Navbar`](components/Navbar.jsx), and [`PhotoDetails`](components/PhotoDetails.jsx).
- **Sample Data**: Demo photo data in [`lib/image-data.js`](lib/image-data.js) using [Picsum](https://picsum.photos/) for images.
- **ESLint**: Code linting for quality and consistency.
- **Continuous Integration**: GitHub Actions workflow for lint, test, and build.
- **Locale Switcher**: Language switcher with flag icons for Bangla (bd.png) and English (usa.png).

---

## Project Structure

```
photofeed/
├── app/                  # Next.js app directory (routing, pages, API, localization)
│   ├── [lang]/           # Language-specific routes and dictionaries
│   ├── api/photos/       # API endpoints for photo data
│   └── page.js           # Main page
├── components/           # Reusable React components (Logo, Navbar, PhotoDetails, LanguageSwitcher, etc.)
├── lib/                  # Utility libraries and sample data (image-data.js)
├── public/               # Static assets (images, icons, flags)
├── styles/               # Global styles (if any)
├── middleware.js         # Locale detection and redirection
├── tailwind.config.js    # Tailwind CSS configuration
├── postcss.config.mjs    # PostCSS configuration
├── .github/workflows/    # CI/CD workflows (ci.yml)
├── README.md             # Project documentation
└── package.json          # Project dependencies and scripts
```

---

## API Endpoints

- `GET /api/photos`  
  Returns all photo objects.

- `GET /api/photos/[id]`  
  Returns a single photo by ID.

See [`app/api/photos/route.js`](app/api/photos/route.js) and [`app/api/photos/[id]/route.js`](app/api/photos/[id]/route.js).

---

## Localization

- Dictionaries for English and Bengali in [`app/[lang]/dictionaries/`](app/[lang]/dictionaries/)
- Locale is auto-detected and routed via [`middleware.js`](middleware.js)
- Language switcher updates flag and language based on route

---

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

---

## Continuous Integration

- GitHub Actions workflow in [`.github/workflows/ci.yml`](.github/workflows/ci.yml) runs lint, tests, and build on push/pull request to `main`.

---

## Future Improvements

- Add user authentication and profile management
- Allow users to upload their own photos
- Add comments and likes functionality
- Improve accessibility and SEO
- Add more languages and locale support
- Integrate real backend/database for photo data

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Picsum Photos](https://picsum.photos/)
- [GitHub Actions](https://docs.github.com/en/actions)

---

_This project was bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)._
