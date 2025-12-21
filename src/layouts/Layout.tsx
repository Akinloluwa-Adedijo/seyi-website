import Header from "../components/Header/Header";
import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../utils/ScrollToTop";
import Lenis from "lenis";
import { useEffect } from "react";
// import CustomCursor from "../components/CustomCursor";

const Layout = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      <Header />
      <ScrollToTop />
      {/* <CustomCursor />  */}
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
