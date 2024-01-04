import { Outlet } from "react-router-dom";
import Header from "./Header";

function NoHeaderFooterLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default NoHeaderFooterLayout;
