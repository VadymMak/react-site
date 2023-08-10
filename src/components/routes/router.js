import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayer from "../layers/RootLayer";

import Home from "../../pages/home/Home";
import Services from "../../pages/services/Services";
import Products from "../../pages/products/Products";
import Signup from "../../pages/signup/Signup";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayer />}>
      <Route index element={<Home />} />
      <Route path="services" element={<Services />} />
      <Route path="products" element={<Products />} />
      <Route path="signup" element={<Signup />} />
    </Route>
  )
);
