import { useEffect, useState } from 'react';
import axiosInstance from '../api/axiosInstance';

const GroupRecommendPage = () => {
  const [groups, setGroups] = useState<any[]>([]);
  const [selectedGroupId, setSelectedGroupId] = useState<number | null>(null);
  const [contents, setContents] = useState<any[]>([]);

  useEffect(() => {
    axiosInstance.get('/groups/my').then(res => setGroups(res.data));
  }, []);

  useEffect(() => {
    if (selectedGroupId) {
      axiosInstance.get(`/groups/${selectedGroupId}/recommend`).then(res => setContents(res.data));
    }
  }, [selectedGroupId]);

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-2xl font-bold">그룹 기반 추천</h2>
      <select onChange={e => setSelectedGroupId(Number(e.target.value))} className="border p-2 rounded">
        <option value="">그룹 선택</option>
        {groups.map(group => (
          <option key={group.id} value={group.id}>{group.name}</option>
        ))}
      </select>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-4">
        {contents.map(content => (
          <div key={content.id} className="bg-white p-3 rounded-lg shadow">
            <img src={content.imageUrl} alt={content.title} className="w-full h-40 object-cover rounded" />
            <div className="mt-2 font-semibold">{content.title}</div>
            <div className="text-sm text-gray-500">
              {content.genre} · {content.nation}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroupRecommendPage;
