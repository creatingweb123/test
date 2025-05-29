// src/components/Navbar.tsx
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 추후 토큰 기반으로 대체 가능
  const navigate = useNavigate();

  useEffect(() => {
    // 간단한 로그인 여부 체크 (로컬스토리지 토큰 등)
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-red-500 hover:text-red-600 transition">
          Netflix Together
        </Link>
        <div className="space-x-4">
          {isLoggedIn ? (
            <>
              <Link
                to="/mypage"
                className="text-gray-700 hover:text-red-500 transition"
              >
                마이페이지
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-1.5 rounded hover:bg-red-600 transition"
              >
                로그아웃
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-gray-700 hover:text-red-500 transition"
              >
                로그인
              </Link>
              <Link
                to="/signup"
                className="bg-red-500 text-white px-4 py-1.5 rounded hover:bg-red-600 transition"
              >
                회원가입
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
