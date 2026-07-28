import { createBrowserRouter } from "react-router-dom";
import NewCareer from "@/pages/NewCareer/NewCareer";
import MainLayout from "@/layouts/MainLayout";
import Home from "@/pages/Home/Home";
import NotFound from "@/pages/NotFound/NotFound";
import Dashboard from "@/pages/Dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [{
      path: "new-career",
      element: <NewCareer />,
    },
    {
      index: true,
      element: <Home />,
    },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },

  {
    path: "dashboard",
    element: <Dashboard />,
  },
]);

export default router;