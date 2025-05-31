import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-white shadow p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-red-600">Netflix Together</Link>
          <nav className="space-x-4">
            <Link to="/recommend" className="hover:underline">추천</Link>
            <Link to="/group" className="hover:underline">그룹</Link>
            <Link to="/mypage" className="hover:underline">마이페이지</Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto p-4">{children}</main>
    </div>
  );
};

export default Layout;
