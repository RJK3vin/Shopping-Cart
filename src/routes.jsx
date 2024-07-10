import App from "./App";
import Cart from "./Cart";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
];

export default routes;
