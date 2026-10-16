# Ringside Roster

React Router practice project: a WWE-style wrestler card site.
Stack: React + Vite, React Router v6, Tailwind CSS v4, DaisyUI v5.

## Run it
    npm install
    npm run dev

## Where each React Router feature lives
- createBrowserRouter / RouterProvider: src/main.jsx
- Nested routes + Outlet: src/layouts/RootLayout.jsx
- NavLink (active route): src/layouts/RootLayout.jsx
- Loaders + useLoaderData: src/main.jsx, src/pages/Wrestlers.jsx
- Dynamic route + params: "wrestlers/:wrestlerId" in main.jsx, useParams in WrestlerDetails.jsx
- useNavigate: Back button in WrestlerDetails.jsx
- useNavigation (loading spinner): RootLayout.jsx
- useLocation: footer in RootLayout.jsx
- Error handling (useRouteError): src/pages/ErrorPage.jsx

## Fake API
public/wrestlers.json (18 real wrestlers: 5 current champions, 5 popular superstars, 8 Hall of Famers), fetched with fetch + async/await in src/api/wrestlers.js.
The 18 roster photos are stored in public/images (see the README.txt there for credits and licenses). Missing photos fall back to a local initials avatar that works offline.
