// src/components/GroupCard.tsx
import { useNavigate } from 'react-router-dom';

interface Group {
  id: number;
  name: string;
  memberCount: number;
  commonGenres: string[];
  imageUrl: string;
}

const GroupCard = ({ group }: { group: Group }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow rounded-xl overflow-hidden">
      <img src={group.imageUrl} alt={group.name} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{group.name}</h3>
        <p className="text-sm text-gray-500 mb-2">구성원: {group.memberCount}명</p>
        <div className="flex flex-wrap gap-2 text-sm mb-3">
          {group.commonGenres.map((genre, i) => (
            <span key={i} className="bg-green-100 text-green-600 px-2 py-1 rounded">
              {genre}
            </span>
          ))}
        </div>
        <button
          onClick={() => navigate(`/groups/${group.id}`)}
          className="text-blue-600 text-sm font-medium hover:underline"
        >
          그룹 상세 보기 →
        </button>
      </div>
    </div>
  );
};

export default GroupCard;
