// src/pages/Homepage.tsx
//import { useAuth } from '../contexts/AuthContext';
//import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  // const { user, logout } = useAuth();
  // const navigate = useNavigate();

  // const handleLogout = () => {
  //   logout();
  //   navigate('/login');
  // };
  return (
    <div className="text-center p-8">
      <h1 className="text-2xl font-bold">Welcome to Netflix Together 🎬</h1>
    </div>
  );
  // return (
  //   <div className="max-w-4xl mx-auto px-4 py-10">
  //     <div className="bg-white shadow-md rounded-xl p-8">
  //       <h1 className="text-3xl font-bold text-gray-800 mb-6">Netflix Together</h1>

  //       {user ? (
  //         <div className="space-y-4">
  //           <p className="text-lg text-gray-700">
  //             안녕하세요, <span className="font-semibold text-blue-600">{user.name}</span>님! 🎉
  //           </p>

  //           <div className="flex gap-4">
  //             <button
  //               onClick={() => navigate('/recommend')}
  //               className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
  //             >
  //               추천 콘텐츠 보기
  //             </button>

  //             <button
  //               onClick={handleLogout}
  //               className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
  //             >
  //               로그아웃
  //             </button>
  //           </div>
  //         </div>
  //       ) : (
  //         <div className="space-y-2">
  //           <p className="text-gray-600">로그인이 필요합니다.</p>
  //           <div className="flex gap-3">
  //             <button
  //               onClick={() => navigate('/login')}
  //               className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
  //             >
  //               로그인
  //             </button>
  //             <button
  //               onClick={() => navigate('/signup')}
  //               className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition"
  //             >
  //               회원가입
  //             </button>
  //           </div>
  //         </div>
  //       )}
  //     </div>
  //   </div>
  // );
};

export default HomePage;
