import { useState } from 'react';
import axiosInstance from '../utils/axiosInstance';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axiosInstance.post('/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      navigate('/mypage');
    } catch {
      alert('로그인 실패. 이메일과 비밀번호를 확인하세요.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">로그인</h2>
      <input
        type="email"
        placeholder="이메일"
        className="w-full border p-2 mb-2"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="비밀번호"
        className="w-full border p-2 mb-4"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={handleLogin} className="w-full bg-blue-600 text-white py-2 rounded">
        로그인
      </button>
    </div>
  );
};

export default LoginPage;
