import Header from "./components/Header/Header";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layouts/Layout";
import Error from "./pages/Error/Error";
import Home from "./pages/Home/Home";
import Music from "./pages/Music/Music";
import Offstage from "./pages/OffStage/Offstage";
import Updates from "./pages/Updates/Updates";
import Contact from "./pages/Contact/Contact";
import { AnimatePresence } from "motion/react";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} errorElement={<Error />}>
        <Route index element={<Home />} />
        <Route path="/music" element={<Music />} />
        <Route path="/offstage" element={<Offstage />} />
        <Route path="/updates" element={<Updates />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    )
  );
  return (
    <>
      <AnimatePresence mode="wait">
        <RouterProvider router={router} />
      </AnimatePresence>
    </>
  );
}

export default App;
