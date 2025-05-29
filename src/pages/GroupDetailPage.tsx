import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ContentCard from '../components/ContentCard';
import axiosInstance from '../api/axiosInstance';

const GroupDetailPage = () => {
  const { groupId } = useParams();
  const [group, setGroup] = useState<any>(null);
  const [recommendations, setRecommendations] = useState<any[]>([]);

  useEffect(() => {
    axiosInstance.get(`/groups/${groupId}`).then(res => setGroup(res.data));
    axiosInstance.get(`/groups/${groupId}/recommend`).then(res => setRecommendations(res.data));
  }, [groupId]);

  return (
    <div className="p-6">
      {group && (
        <>
          <h2 className="text-2xl font-bold">{group.name} 그룹</h2>
          <div>👥 구성원: {group.members.map((m: any) => m.nickname).join(', ')}</div>
        </>
      )}

      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">🎬 그룹 추천 콘텐츠</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {recommendations.map(content => (
            <ContentCard key={content.id} content={content} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GroupDetailPage;
