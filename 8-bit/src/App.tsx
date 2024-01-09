import router from "./routes";
import { RouterProvider } from "react-router-dom";
import { Global, css } from "@emotion/react";
import { Common } from "./styles/common";
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <>
        <Global
          styles={css`
          ${Common.reset}
        `}
        />
        <RouterProvider router={router} />
      </>
    </RecoilRoot>
  );
}

export default App;