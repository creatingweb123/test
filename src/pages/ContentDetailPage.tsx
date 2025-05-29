import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axiosInstance from '../api/axiosInstance';

type Content = {
  id: number;
  title: string;
  genre: string;
  nation: string;
  ageRating: string;
  description: string;
  imageUrl: string;
};

type Review = {
  id: number;
  author: string;
  content: string;
  createdAt: string;
};

const ContentDetailPage = () => {
  const { id } = useParams();
  const [content, setContent] = useState<Content | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [newReview, setNewReview] = useState('');

  useEffect(() => {
    axiosInstance.get(`/content/${id}`).then(res => setContent(res.data));
    axiosInstance.get(`/reviews/content/${id}`).then(res => setReviews(res.data));
  }, [id]);

  const submitReview = async () => {
    await axiosInstance.post(`/reviews`, {
      contentId: id,
      content: newReview,
    });
    setNewReview('');
    const res = await axiosInstance.get(`/reviews/content/${id}`);
    setReviews(res.data);
  };
  const markAsViewed = async () => {
    await axiosInstance.post(`/viewing-history`, { contentId: id });
    alert('시청 기록에 추가되었습니다!');
  };
  

  return (
    <div className="p-6 space-y-6">
      {content && (
        <div className="space-y-3">
          <h1 className="text-3xl font-bold">{content.title}</h1>
          <img src={content.imageUrl} className="w-full max-h-96 object-cover rounded" alt={content.title} />
          <div className="text-gray-600">
            장르: {content.genre} | 국가: {content.nation} | 연령: {content.ageRating}
          </div>
          <p>{content.description}</p>
        </div>
      )}

      <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold">리뷰</h2>
        <textarea
          value={newReview}
          onChange={e => setNewReview(e.target.value)}
          placeholder="감상평을 작성해보세요"
          className="w-full border rounded p-2"
          rows={3}
        />
        <button onClick={submitReview} className="bg-blue-500 text-white px-4 py-2 rounded">등록</button>

        <div className="space-y-3 pt-4">
          {reviews.map(r => (
            <div key={r.id} className="border rounded p-3">
              <div className="font-semibold">{r.author}</div>
              <div>{r.content}</div>
              <div className="text-sm text-gray-400">{new Date(r.createdAt).toLocaleString()}</div>
            </div>
          ))}
        </div>
      </div>
            <button
        onClick={markAsViewed}
        className="bg-green-500 text-white px-4 py-2 rounded mt-4"
        >
        시청 완료
        </button>
    </div>
    
  );
};

export default ContentDetailPage;
