import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <Link to="/" className="font-bold text-lg">Netflix Together</Link>
      <div>
        {user ? (
          <>
            <span className="mr-2">{user.nickname}</span>
            <button onClick={logout} className="text-sm text-red-500">로그아웃</button>
          </>
        ) : (
          <Link to="/login" className="text-sm text-blue-500">로그인</Link>
        )}
      </div>
    </header>
  );
};

export default Header;
