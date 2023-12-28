import router from "./routes";
import { RouterProvider } from "react-router-dom";
import { Global, css } from "@emotion/react";
import { Common } from "./styles/common";

function App() {
  return (
    <>
      <Global
        styles={css`
          ${Common.reset}
        `}
      />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
