import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
// import ProtectedRoute from './ProtectedRoute';
import RecommendPage from '../pages/RecommendPage';
import ContentDetailPage from '../pages/ContentDetailPage';
import MyPage from '../pages/MyPage';



const Router = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/recommend" element={<RecommendPage />} />
    <Route path="/content/:id" element={<ContentDetailPage />} />
    <Route path="/mypage" element={<MyPage />} />
  </Routes>
  
);

export default Router;