import { useNavigate } from 'react-router-dom';

type Content = {
  id: number;
  title: string;
  genre: string;
  nation: string;
  imageUrl: string;
};

interface Props {
  content: Content;
}

const ContentCard = ({ content }: Props) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/content/${content.id}`)}
      className="cursor-pointer bg-white p-3 rounded shadow hover:shadow-md transition"
    >
      <img
        src={content.imageUrl}
        alt={content.title}
        className="w-full h-40 object-cover rounded"
      />
      <div className="mt-2 font-bold">{content.title}</div>
      <div className="text-sm text-gray-500">
        {content.genre} · {content.nation}
      </div>
    </div>
  );
};

export default ContentCard;
