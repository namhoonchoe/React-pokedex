import { RouterProvider } from "react-router-dom";

import AlignCenter from "@components/AlignCenter";
import RootRouter from "./components/Router";
// 1. import `ChakraProvider` component

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <AlignCenter>
      <RouterProvider router={RootRouter} />
    </AlignCenter>
  );
}

export default App;
