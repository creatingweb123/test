import { useEffect, useState } from 'react';
import axiosInstance from '../api/axiosInstance';
import ContentCard from '../components/ContentCard';

type UserInfo = {
  nickname: string;
  preferredGenres: string[];
  preferredNations: string[];
  ageRating: string;
};

type Content = {
  id: number;
  title: string;
  genre: string;
  nation: string;
  imageUrl: string;
};

const MyPage = () => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [history, setHistory] = useState<Content[]>([]);

  useEffect(() => {
    axiosInstance.get('/users/me').then(res => setUserInfo(res.data));
    axiosInstance.get('/viewing-history').then(res => setHistory(res.data));
  }, []);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">마이페이지</h1>

      {userInfo && (
        <div className="space-y-1">
          <div>👤 닉네임: {userInfo.nickname}</div>
          <div>🎯 선호 장르: {userInfo.preferredGenres.join(', ')}</div>
          <div>🌍 선호 국가: {userInfo.preferredNations.join(', ')}</div>
          <div>🔞 시청 연령: {userInfo.ageRating}</div>
        </div>
      )}

      <div>
        <h2 className="text-xl font-semibold mt-6">📺 시청 이력</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {history.map(content => (
            <ContentCard key={content.id} content={content} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyPage;
