import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
// import ProtectedRoute from './ProtectedRoute';
import RecommendPage from '../pages/RecommendPage';
import ContentDetailPage from '../pages/ContentDetailPage';
import MyPage from '../pages/MyPage';
import SignupPage from '../pages/SignupPage';
import GroupPage from '../pages/GroupPage';
import GroupDetailPage from '../pages/GroupDetailPage';



const Router = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/login" element={<SignupPage />} />
    <Route path="/recommend" element={<RecommendPage />} />
    <Route path="/content/:id" element={<ContentDetailPage />} />
    <Route path="/mypage" element={<MyPage />} />
    <Route path="/groups" element={<GroupPage />} />
  <Route path="/groups/:groupId" element={<GroupDetailPage />} />
  </Routes>
  
);

export default Router;