import Home from "./home";
import PDP from "./pdp";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/pdp/:id?",
    component: PDP
  }
];

export default routes;
