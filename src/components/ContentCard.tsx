import axiosInstance from '../utils/axiosInstance';

const ContentCard = ({ content }: { content: any }) => {
  const handleMarkAsWatched = async () => {
    try {
      await axiosInstance.post('/users/me/history', {
        contentId: content.id,
      });
      alert('시청 완료로 기록되었습니다.');
    } catch {
      alert('시청 기록 실패');
    }
  };

  return (
    <div className="border rounded shadow hover:shadow-lg transition-all p-2">
      <img src={content.imageUrl} alt={content.title} className="w-full h-40 object-cover rounded" />
      <div className="mt-2">
        <h4 className="text-lg font-semibold">{content.title}</h4>
        <p className="text-sm text-gray-600">{content.genre}</p>
        <button
          onClick={handleMarkAsWatched}
          className="mt-2 text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
        >
          시청 완료
        </button>
      </div>
    </div>
  );
};

export default ContentCard;
