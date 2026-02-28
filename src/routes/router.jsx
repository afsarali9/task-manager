import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../layouts/AppLayout";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import Tasks from "../pages/Tasks";
import { PublicLayout } from "../layouts/PublicLayout";
import Login from "../pages/Login";
import ProtectedLayout from "../layouts/ProtectedLayout";
import PublicOnlyLayout from "../layouts/PublicOnlyLayout";

export const router = createBrowserRouter([
  // Public routes
  {
    element: <PublicOnlyLayout />,
    children: [
      {
        element: <PublicLayout />,
        children: [
          { index: true, element: <Login /> },
          { path: "login", element: <Login /> }
        ]
      }
    ]
  },

  // App routes (protected later)
  {
    element: <ProtectedLayout />,
    children: [
      {
        path: "/app",
        element: <AppLayout />,
        children: [
          { index: true, element: <Dashboard /> },
          { path: "profile", element: <Profile /> },
          { path: "setting", element: <Settings /> },
          { path: "task", element: <Tasks /> }
        ]
      }
    ]
  }
])