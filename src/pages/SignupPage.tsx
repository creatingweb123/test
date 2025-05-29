import { useState } from 'react';
import axiosInstance from '../utils/axiosInstance';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await axiosInstance.post('/auth/signup', { email, password });
      alert('회원가입 성공! 로그인해주세요.');
      navigate('/login');
    } catch {
      alert('회원가입 실패. 다시 시도해주세요.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">회원가입</h2>
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
      <button onClick={handleSignup} className="w-full bg-green-600 text-white py-2 rounded">
        회원가입
      </button>
    </div>
  );
};

export default SignupPage;
