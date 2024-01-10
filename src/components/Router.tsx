import Root from "@components/Root";
import Detail from "@pages/Detail";
import Home from "@pages/Home";
import { createBrowserRouter } from "react-router-dom";

const RootRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "pokemon/:id",
        element: <Detail />,
      },
    ],
  },
]);

export default RootRouter;
