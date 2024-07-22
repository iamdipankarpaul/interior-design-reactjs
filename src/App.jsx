import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AppLayout from "./layout/AppLayout";
import SmoothScrolling from "./components/SmoothScrolling";
import ServicesPage from "./pages/ServicesPage";
import TeamPage from "./pages/TeamPage";
import ContactPage from "./pages/ContactPage";

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
        element: <ServicesPage />,
      },
      {
        path: "teams",
        element: <TeamPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
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
