import { useState } from 'react';
import './loginpage.css';

export const LoginSignupPage2 = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  return (
    <div className={`container ${isRightPanelActive ? 'right-panel-active' : ''}`} id="container">
      <div className="form-container sign-up-container">
        <form>
          <h1>Create Account</h1>
          <div className="social-container">
            <a href="#" className="social"><i className="fab fa-facebook-f" /></a>
            <a href="#" className="social"><i className="fab fa-google-plus-g" /></a>
            <a href="#" className="social"><i className="fab fa-linkedin-in" /></a>
          </div>
          <span>or use your email for registration</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
        </form>
      </div>

      <div className="form-container sign-in-container">
        <form>
          <h1>Sign in</h1>
          <div className="social-container">
            <a href="#" className="social"><i className="fab fa-facebook-f" /></a>
            <a href="#" className="social"><i className="fab fa-google-plus-g" /></a>
            <a href="#" className="social"><i className="fab fa-linkedin-in" /></a>
          </div>
          <span>or use your account</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forgot your password?</a>
          <button>Sign In</button>
        </form>
      </div>

      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button className="ghost" onClick={() => setIsRightPanelActive(false)}>Sign In</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button className="ghost" onClick={() => setIsRightPanelActive(true)}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignupPage2;

// src/pages/LoginSignupPage.tsx
// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../contexts/AuthContext';

// const LoginPage = () => {
//   const { user, login } = useAuth();
//   const navigate = useNavigate();

//   const [isSignUpMode, setIsSignUpMode] = useState(false);

//   useEffect(() => {
//     if (user) {
//       navigate('/'); // 로그인 후 홈으로 이동
//     }
//   }, [user, navigate]);

//   const handleSignIn = async () => {
//     // 예시: 로그인 처리 후 AuthContext 업데이트
//     login({ name: 'Test User', email: 'test@example.com' });
//   };

//   const handleSignUp = async () => {
//     // 예시: 회원가입 처리 후 AuthContext 업데이트
//     login({ name: 'New User', email: 'new@example.com' });
//   };

//   return (
//     <div className={`container ${isSignUpMode ? 'right-panel-active' : ''}`} id="container">
//       {/* 기존 HTML/JSX 구조 그대로 유지하면서 버튼 이벤트만 연결 */}
//       <div className="form-container sign-in-container">
//         <form onSubmit={(e) => { e.preventDefault(); handleSignIn(); }}>
//           <h1>Sign in</h1>
//           {/* 이메일/비밀번호 입력 폼 */}
//           <button type="submit">Sign In</button>
//         </form>
//       </div>

//       <div className="form-container sign-up-container">
//         <form onSubmit={(e) => { e.preventDefault(); handleSignUp(); }}>
//           <h1>Create Account</h1>
//           {/* 이름/이메일/비밀번호 입력 폼 */}
//           <button type="submit">Sign Up</button>
//         </form>
//       </div>

//       <div className="overlay-container">
//         <div className="overlay">
//           <div className="overlay-panel overlay-left">
//             <h1>Welcome Back!</h1>
//             <button className="ghost" onClick={() => setIsSignUpMode(false)}>Sign In</button>
//           </div>
//           <div className="overlay-panel overlay-right">
//             <h1>Hello, Friend!</h1>
//             <button className="ghost" onClick={() => setIsSignUpMode(true)}>Sign Up</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;