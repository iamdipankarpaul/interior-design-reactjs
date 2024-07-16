import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AppLayout from "./layout/AppLayout";
import SmoothScrolling from "./components/SmoothScrolling";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "projects",
        element: <div>Projects</div>,
      },
      {
        path: "services",
        element: <div>services</div>,
      },
      {
        path: "teams",
        element: <div>teams</div>,
      },
      {
        path: "contact",
        element: <div>contact</div>,
      },
    ],
  },
]);

export default function App() {
  return (
    <>
      <SmoothScrolling>
        <RouterProvider router={router} />
      </SmoothScrolling>
    </>
  );
}
