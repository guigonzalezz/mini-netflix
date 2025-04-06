# 🎬 Mini Netflix

A minimalist, Netflix-inspired application built with **Next.js** and **TailwindCSS**, created for a front-end code challenge.

## 📌 Overview

This project demonstrates proficiency in building responsive, accessible, and semantically correct web applications using modern tools and technologies. It includes a basic two-page layout:

- A **homepage** displaying a list of movie thumbnails.
- A **movie details** page for displaying detailed movie information.

All movie data is locally sourced via a JSON file due to lack of access to the OMDb API key.

## ✨ Features

- ✅ Built with [Next.js](https://nextjs.org/)
- ✅ Styled using [TailwindCSS](https://tailwindcss.com/)
- ✅ Movie data loaded from a local JSON file
- ✅ Semantic HTML and WCAG-friendly accessibility
- ✅ Fully responsive design
- ✅ Dynamic routing for movie detail pages
- ✅ Clean project structure using TypeScript and modular components

## 🗂️ Project Structure

```bash
src/
├── components/        # Reusable UI components (e.g., Header, MovieCard, Footer)
├── data/              # Local static data (movies.json)
├── pages/             # App pages
│   ├── movie/
│   │   └── details/   # Dynamic route for movie details ([movieId].tsx)
│   ├── 404.tsx        # Custom 404 page
│   ├── 500.tsx        # Custom 500 page
│   ├── _app.tsx       # App wrapper
│   └── index.tsx      # Home page
├── service/           # API service to fetch movies from local data
├── styles/            # Global CSS (Tailwind config)
├── types/             # TypeScript types
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/guigonzalezz/mini-netflix.git
cd mini-netflix
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

### 4. Build for production

```bash
npm run build
npm run start
```

## 🎥 Sample Movies Included

The movie data is stored locally in `src/data/movies.json`, with at least 5 different entries. Each movie includes:

- Poster URL
- Title
- Description
- Rating

## 🔍 Dynamic Routing

You can visit movie detail pages via URLs like:

```
/movie/details/1
/movie/details/2
```

The movie ID in the URL corresponds to the `id` field in the JSON file.

## 📦 Local API Service

Movie data is loaded via a simple API abstraction inside `src/service/api.ts`, simulating an external API call.

## ♿ Accessibility

- Uses semantic HTML (`<main>`, `<section>`, `<article>`)
- Keyboard navigable
- Descriptive alt text for images
- Color contrast and focus states

## 🧪 Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** TailwindCSS
- **Language:** TypeScript
- **Data:** Local JSON
- **Routing:** File-based dynamic routing
