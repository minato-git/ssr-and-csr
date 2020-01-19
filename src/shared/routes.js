import Home from "./home";
import PDP from "./pdp";
import News from "./news";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/news",
    component: News
  },
  {
    path: "/pdp/:id?",
    component: PDP
  }
];

export default routes;
