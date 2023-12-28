import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import NoHeaderFooterLayout from "./layout/NoHeaderFooterLayout";
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
    element: <NoHeaderFooterLayout />,
    children: [{ index: true, element: <SignIn /> }],
  },
  {
    path: "/signup",
    element: <NoHeaderFooterLayout />,
    children: [{ index: true, element: <SignUp /> }],
  },
]);

export default router;
