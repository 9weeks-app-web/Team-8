import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;
