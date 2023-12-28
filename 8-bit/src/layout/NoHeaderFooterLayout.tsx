import { Outlet } from "react-router-dom";

function NoHeaderFooterLayout() {
  return (
    <main>
      <Outlet />
    </main>
  );
}

export default NoHeaderFooterLayout;
