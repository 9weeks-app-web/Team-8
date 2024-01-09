import { createBrowserRouter } from "react-router-dom";
import NoFooterLayout from "./layout/NoFooterLayout";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import MyPage from "./pages/mypage/MyPage";

import UploadPage from "./pages/UploadPage";
import Profile from "./pages/auth/Profile";
import SignupSuccess from "./pages/auth/SignupSuccess";
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
    path: "/upload",
    element: <RootLayout />,
    children: [{ index: true, element: <UploadPage /> }],
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
    path: "/profile",
    element: <NoFooterLayout />,
    children: [{ index: true, element: <Profile /> }],
  },
  {
    path: "/signupSuccess",
    element: <NoFooterLayout />,
    children: [{ index: true, element: <SignupSuccess /> }],
  },
]);

export default router;
