import Header from "../components/Header/Header";
import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../utils/ScrollToTop";
import { LenisProvider } from "../contexts/LenisContext";
// import CustomCursor from "../components/CustomCursor";

const Layout = () => {
  return (
    <LenisProvider>
      <Header />
      <ScrollToTop />
      {/* <CustomCursor />  */}
      <Outlet />
      <Footer />
    </LenisProvider>
  );
};

export default Layout;
