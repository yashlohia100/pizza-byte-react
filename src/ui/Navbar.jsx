import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import { useGetUser } from '../features/user/useGetUser';
import { useLogout } from '../features/user/useLogout';

function Navbar() {
  const { user } = useGetUser();

  const { isPending, logout } = useLogout();

  return (
    <nav className="flex items-center justify-between gap-2 bg-yellow-400 px-4 py-3">
      <Link to="/" className="font-medium uppercase tracking-wider sm:text-xl">
        Pizza Byte
      </Link>

      <SearchOrder />

      {user ? (
        <div className="space-x-2 text-sm uppercase tracking-wide sm:space-x-4">
          <button onClick={logout} disabled={isPending}>
            {isPending ? 'Logging out...' : 'Logout'}
          </button>
          <span>{user.name}</span>
        </div>
      ) : (
        <div className="space-x-2 text-sm uppercase tracking-wide sm:space-x-4">
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
