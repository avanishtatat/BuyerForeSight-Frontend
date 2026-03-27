# User Management System

A responsive React application for browsing and viewing user records. The project is built as an assignment submission and focuses on clean component structure, practical state handling, and a polished user experience using Tailwind CSS.

## Project Overview

This application fetches user data from the JSONPlaceholder API and presents it through two primary views:

- A dashboard for browsing, searching, and sorting users
- A user details page for viewing extended profile information

The interface also includes dedicated loading, empty, and error states so the application remains usable across common API scenarios.

## Core Features

- Dashboard with user cards rendered from live API data
- Real-time search by user name or email
- Alphabetical sorting with ascending and descending order
- User details page with profile, address, and company information
- Skeleton loading UI while data is being fetched
- Empty-state UI when no users match the current filter
- Error-state UI with retry support for failed requests
- Responsive layout for desktop and mobile screens

## Tech Stack

- React
- Vite
- Tailwind CSS
- React Router DOM
- React Icons

## API Source

User data is fetched from JSONPlaceholder:

- `https://jsonplaceholder.typicode.com/users`
- `https://jsonplaceholder.typicode.com/users/:id`

## Application Routes

- `/` - Dashboard page showing the user directory
- `/users/:userId` - User details page

## Project Structure

```text
frontend/
   public/
      favicon.svg
      icons.svg
   src/
      assets/
      components/
         EmptyState.jsx
         ErrorState.jsx
         Navbar.jsx
         SearchAndFilters.jsx
         SkeletonLoader.jsx
         UserCard.jsx
      pages/
         Dashboard.jsx
         UserDetails.jsx
      utils/
         helper.js
      App.jsx
      index.css
      main.jsx
   eslint.config.js
   index.html
   package.json
   README.md
   vite.config.js
```

## Installation

### Prerequisites

- Node.js 18 or later
- npm

### Steps

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the local development URL shown in the terminal, typically:

```text
http://localhost:5173
```

## Available Scripts

```bash
npm run dev      # Start the Vite development server
npm run build    # Create a production build
npm run preview  # Preview the production build locally
npm run lint     # Run ESLint
```

## Implementation Notes

- Routing is handled with React Router.
- Styling is implemented with Tailwind CSS v4.
- User list sorting is handled on the client side.
- Search filtering updates the rendered list in real time.
- Reusable fallback components are used for loading, empty, and error states.

## Assignment Scope

This project was created as an assignment to demonstrate:

- Component-based UI development with React
- Client-side data fetching and rendering
- State management using React hooks
- Responsive frontend design
- Clean project structure and reusable UI patterns

## Deployment on Vercel

This project is deployed as a Single Page Application (SPA) on Vercel.

### Why `vercel.json` is needed

The app uses React Router with `BrowserRouter`. Routes like `/users/3` only exist client-side. Without a rewrite rule, Vercel tries to find a real file at that path on the server and returns a `404` on page refresh or direct navigation.

The `vercel.json` at the root of the project fixes this by redirecting all requests back to `index.html`, letting React Router handle the route:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Steps to deploy

1. Push the project to a GitHub repository.
2. Import the repository on [vercel.com](https://vercel.com).
3. Set the framework preset to **Vite**.
4. Vercel will auto-detect the build command (`npm run build`) and output directory (`dist`).
5. Click **Deploy**.

The `vercel.json` rewrite is picked up automatically and all routes will work correctly on refresh.

## Future Improvements

- Add unit and integration tests
- Add pagination or virtualization for larger datasets
- Add toast notifications for API events
- Add edit and delete actions with a backend service
- Improve accessibility with keyboard navigation and ARIA refinements

## License

This repository is intended for educational and assignment use.
