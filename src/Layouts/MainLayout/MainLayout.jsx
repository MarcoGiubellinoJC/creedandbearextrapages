// Components
import Navbar from "../../Components/UIKit/Navbar/Navbar";

// Libraries
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <main>
        <Navbar />
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
