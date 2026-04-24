// src/layouts/DefaultLayout.tsx
import { Outlet } from "react-router-dom";
import Menu from "../views/Menu/Menu";
import Footer from "../views/Footer/Footer";

const DefaultLayout = () => {
  return (
    <>
      <Menu />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
