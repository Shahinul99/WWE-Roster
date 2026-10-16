import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Wrestlers from "./pages/Wrestlers";
import WrestlerDetails from "./pages/WrestlerDetails";
import ErrorPage from "./pages/ErrorPage";
import { getWrestlers, getWrestler } from "./api/wrestlers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home />, loader: getWrestlers },
      { path: "wrestlers", element: <Wrestlers />, loader: getWrestlers },
      {
        // dynamic route: /wrestlers/3
        path: "wrestlers/:wrestlerId",
        element: <WrestlerDetails />,
        loader: ({ params }) => getWrestler(params.wrestlerId),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
