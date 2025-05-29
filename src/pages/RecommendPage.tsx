import { useEffect, useState } from 'react';
import axiosInstance from '../api/axiosInstance';

type Content = {
  id: number;
  title: string;
  genre: string;
  nation: string;
  ageRating: string;
  imageUrl: string;
};

const RecommendPage = () => {
  const [genre, setGenre] = useState('');
  const [nation, setNation] = useState('');
  const [ageRating, setAgeRating] = useState('');
  const [recommendations, setRecommendations] = useState<Content[]>([]);

  const fetchRecommendations = async () => {
    try {
      const res = await axiosInstance.get('/recommend', {
        params: {
          genre,
          nation,
          age: ageRating,
        },
      });
      setRecommendations(res.data);
    } catch {
      alert('추천 콘텐츠를 불러오는 데 실패했습니다.');
    }
  };

  useEffect(() => {
    fetchRecommendations();
  }, [genre, nation, ageRating]);

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">콘텐츠 추천</h1>
      <div className="flex gap-4">
        <select value={genre} onChange={e => setGenre(e.target.value)} className="border p-2 rounded">
          <option value="">장르 전체</option>
          <option value="드라마">드라마</option>
          <option value="스릴러">스릴러</option>
          <option value="코미디">코미디</option>
        </select>
        <select value={nation} onChange={e => setNation(e.target.value)} className="border p-2 rounded">
          <option value="">국가 전체</option>
          <option value="미국">미국</option>
          <option value="한국">한국</option>
          <option value="일본">일본</option>
        </select>
        <select value={ageRating} onChange={e => setAgeRating(e.target.value)} className="border p-2 rounded">
          <option value="">전체 연령</option>
          <option value="12">12세 이상</option>
          <option value="15">15세 이상</option>
          <option value="19">19세 이상</option>
        </select>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-4">
        {recommendations.map(content => (
          <div key={content.id} className="bg-white p-3 rounded-lg shadow hover:shadow-md transition">
            <img src={content.imageUrl} alt={content.title} className="w-full h-40 object-cover rounded" />
            <div className="mt-2 font-semibold">{content.title}</div>
            <div className="text-sm text-gray-500">
              {content.genre} · {content.nation} · {content.ageRating}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendPage;
