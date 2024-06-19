import App from "./App";
import Shopping from "./Shopping";
import Cart from "./Cart";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/shopping",
    element: <Shopping />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
];

export default routes;
