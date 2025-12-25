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
import Offstage from "./components/Offstage";
import Updates from "./pages/Updates/Updates";
import Contact from "./pages/Contact/Contact";
import { AnimatePresence } from "motion/react";
import PoemsReviews from "./pages/PoemsReviews/PoemsReviews";
import Gallery from "./pages/Gallery/Gallery";
import Press from "./pages/Press/Press";
import About from "./pages/About/About";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} errorElement={<Error />}>
        <Route index element={<Home />} />
        <Route path="/music" element={<Music />} />
        <Route path="/poems-reviews" element={<PoemsReviews />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/press" element={<Press />} />
        <Route path="/about" element={<About />} />
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
