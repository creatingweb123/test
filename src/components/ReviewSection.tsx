import { useEffect, useState } from 'react';
import axiosInstance from '../utils/axiosInstance';

const ReviewSection = ({ groupId, contentId }: { groupId: string; contentId: string }) => {
  const [reviews, setReviews] = useState<any[]>([]);
  const [newComment, setNewComment] = useState('');

  const fetchReviews = async () => {
    const res = await axiosInstance.get(`/groups/${groupId}/reviews/${contentId}`);
    setReviews(res.data);
  };

  const handleSubmit = async () => {
    try {
      await axiosInstance.post(`/groups/${groupId}/reviews`, {
        contentId,
        text: newComment,
      });
      setNewComment('');
      fetchReviews();
    } catch {
      alert('리뷰 등록 실패');
    }
  };

  const handleDelete = async (reviewId: number) => {
    try {
      await axiosInstance.delete(`/groups/${groupId}/reviews/${reviewId}`);
      fetchReviews();
    } catch {
      alert('삭제 실패');
    }
  };

  useEffect(() => {
    fetchReviews();
  }, [groupId, contentId]);

  return (
    <div className="mt-4 border-t pt-4">
      <h4 className="font-semibold mb-2">그룹 코멘트</h4>

      <div className="space-y-2 mb-4">
        {reviews.map((review) => (
          <div key={review.id} className="flex justify-between items-start border p-2 rounded bg-gray-50">
            <div>
              <p className="text-sm font-medium">{review.username}</p>
              <p className="text-sm">{review.text}</p>
            </div>
            <button onClick={() => handleDelete(review.id)} className="text-sm text-red-500">
              삭제
            </button>
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="감상평을 입력하세요"
          className="border p-2 flex-grow rounded"
        />
        <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded">
          등록
        </button>
      </div>
    </div>
  );
};

export default ReviewSection;
