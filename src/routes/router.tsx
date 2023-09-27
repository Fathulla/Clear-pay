import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../pages/AppLayout";
import { ConvertionPage } from "../pages/ConvertionPage";
import { ProfilePage } from "../pages/ProfilePage";
import { TransfersPage } from "../pages/TransfersPage";

export const routes = [
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <ProfilePage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
      {
        path: "/transfers",
        element: <TransfersPage />,
      },
      {
        path: "/convertion",
        element: <ConvertionPage />,
      },
      {
        path: "/service",
        element: <ProfilePage />,
      },
      {
        path: "/payment",
        element: <ProfilePage />,
      },
      {
        path: "/help",
        element: <ProfilePage />,
      },
      {
        path: "/exit",
        element: <ProfilePage />,
      },
    ],
  },
];

export const appRouter = createBrowserRouter(routes);
