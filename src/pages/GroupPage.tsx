import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../utils/axiosInstance';

const GroupPage = () => {
  const [groups, setGroups] = useState<any[]>([]);
  const [newGroupName, setNewGroupName] = useState('');
  const navigate = useNavigate();

  const fetchGroups = async () => {
    const res = await axiosInstance.get('/groups');
    setGroups(res.data);
  };

  useEffect(() => {
    fetchGroups();
  }, []);

  const handleCreateGroup = async () => {
    try {
      await axiosInstance.post('/groups', { name: newGroupName });
      setNewGroupName('');
      fetchGroups();
    } catch {
      alert('그룹 생성 실패');
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">내 그룹</h2>

      <div className="flex gap-2 mb-6">
        <input
          value={newGroupName}
          onChange={e => setNewGroupName(e.target.value)}
          placeholder="새 그룹 이름"
          className="border p-2 flex-grow rounded"
        />
        <button onClick={handleCreateGroup} className="bg-green-600 text-white px-4 py-2 rounded">
          생성
        </button>
      </div>

      <ul className="space-y-3">
        {groups.map(group => (
          <li
            key={group.id}
            className="border rounded p-4 hover:shadow cursor-pointer flex justify-between items-center"
            onClick={() => navigate(`/groups/${group.id}`)}
          >
            <div>
              <h4 className="text-lg font-semibold">{group.name}</h4>
              <p className="text-sm text-gray-500">구성원 수: {group.memberCount}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GroupPage;
