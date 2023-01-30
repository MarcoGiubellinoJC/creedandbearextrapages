// Components
import Navbar from "../../Components/UIKit/Navbar/Navbar";
import Footer from "../../Components/UIKit/Footer/Footer";

// Libraries
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <main>
        <Navbar />
        <Outlet />
        <Footer />
      </main>
    </>
  );
};

export default MainLayout;
