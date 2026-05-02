import { Outlet } from 'react-router-dom';

import Footer from '../views/Footer/Footer';
import Menu from '../views/Menu/Menu';

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
