import { Outlet } from 'react-router-dom';
import CartOverview from '../features/cart/CartOverview';
import Main from './Main';
import Navbar from './Navbar';

function AppLayout() {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] text-stone-800">
      <Navbar />

      <Main>
        <Outlet />
      </Main>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
