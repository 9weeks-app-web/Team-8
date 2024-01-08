import { createBrowserRouter } from "react-router-dom";
import NoFooterLayout from "./layout/NoFooterLayout";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import MyPage from "./pages/mypage/MyPage";

import SignupSuccess from "./pages/auth/SignupSuccess";
import SignupTwo from "./pages/auth/SignupTwo";
import CommunityBoard from "./pages/community/CommunityBoard";
import CommunityHome from "./pages/community/CommunityHome";
import CommunityHot from "./pages/community/CommunityHot";
import CommunityQna from "./pages/community/CommunityQna";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "community/hot", element: <CommunityHot /> },
      { path: "community/qna", element: <CommunityQna /> },
      { path: "community/board", element: <CommunityBoard /> },
    ],
  },
  {
    path: "/community",
    element: <RootLayout />,
    children: [
      { index: true, element: <CommunityHome /> },
      { path: "qna", element: <MyPage /> },
      { path: "hot", element: <MyPage /> },
      { path: "board", element: <MyPage /> },
    ],
  },
  {
    path: "/mypage",
    element: <RootLayout />,
    children: [
      { index: true, element: <MyPage /> },
      { path: "qna", element: <MyPage /> },
      { path: "hot", element: <MyPage /> },
      { path: "board", element: <MyPage /> },
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
  {
    path: "/signupTwo",
    element: <NoFooterLayout />,
    children: [{ index: true, element: <SignupTwo /> }],
  },
  {
    path: "/signupSuccess",
    element: <NoFooterLayout />,
    children: [{ index: true, element: <SignupSuccess /> }],
  },
]);

export default router;
