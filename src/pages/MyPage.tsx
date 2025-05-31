import { useEffect, useState } from 'react';
import axiosInstance from '../utils/axiosInstance';

const MyPage = () => {
  const [profile, setProfile] = useState<any>(null);
  const [history, setHistory] = useState<any[]>([]);

  useEffect(() => {
    const fetchProfileAndHistory = async () => {
      try {
        const profileRes = await axiosInstance.get('/users/me');
        const historyRes = await axiosInstance.get('/users/me/history');
        setProfile(profileRes.data);
        setHistory(historyRes.data);
      } catch (err) {
        alert('마이페이지 정보를 불러오지 못했습니다.');
      }
    };

    fetchProfileAndHistory();
  }, []);

  return (
    <div className="max-w-3xl mx-auto mt-8 p-4">
      <h2 className="text-2xl font-bold mb-4">마이페이지</h2>

      {profile && (
        <div className="mb-6 bg-white p-4 shadow rounded">
          <h3 className="text-lg font-semibold mb-2">기본 정보</h3>
          <p><strong>이메일:</strong> {profile.email}</p>
          <p><strong>선호 장르:</strong> {profile.preferredGenres?.join(', ') || '없음'}</p>
          <p><strong>선호 국가:</strong> {profile.preferredCountries?.join(', ') || '없음'}</p>
        </div>
      )}

      <div className="bg-white p-4 shadow rounded">
        <h3 className="text-lg font-semibold mb-2">시청 이력</h3>
        {history.length === 0 ? (
          <p>시청 기록이 없습니다.</p>
        ) : (
          <ul className="list-disc list-inside">
            {history.map(item => (
              <li key={item.contentId}>{item.contentTitle}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MyPage;
