import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayer from "../layers/RootLayer";

export const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<RootLayer />}></Route>)
);
