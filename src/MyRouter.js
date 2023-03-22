import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./Screens/Homepage";
import Counter from "./Screens/Counter";
import Login from "./Screens/Login";
import PlanetScreen from "./Screens/PlanetScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import DashboardScreen from "./Screens/DashboardScreen";
import CreatePostScreen from "./Screens/CreatePostScreen";
import ListPostsScreen from "./Screens/ListPostsScreen";
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/counter",
      element: <Counter />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/planet",
      element: <PlanetScreen />,
    },
    {
      path: "/register",
      element: <RegisterScreen />,
    },
    {
      path: "/dashboard",
      element: <DashboardScreen />,
    },
    {
      path: "/createPost",
      element: <CreatePostScreen />,
    },
    {
      path: "/listPosts",
      element: <ListPostsScreen />,
    },
  ],
  { basename: "/react-demo" }
);

function MyRouter() {
  return <RouterProvider router={router} />;
}

export default MyRouter;
