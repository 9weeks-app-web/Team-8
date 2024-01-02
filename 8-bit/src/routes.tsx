import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import NoFooterLayout from "./layout/NoFooterLayout";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import MyPage from "./pages/MyPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "mypage", element: <MyPage /> },
    ],
  },
  {
    path: "/signIn",
    element: <NoFooterLayout />,
    children: [{ index: true, element: <SignIn /> }],
  },
  {
    path: "/signup",
    element: <NoFooterLayout />,
    children: [{ index: true, element: <SignUp /> }],
  },
]);

export default router;
