import { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";

const GroupPage = () => {
    const [groups, setGroups] = useState<any[]>([]);
    const [groupName, setGroupName] = useState('');
  
    useEffect(() => {
      axiosInstance.get('/groups').then(res => setGroups(res.data));
    }, []);
  
    const createGroup = async () => {
      await axiosInstance.post('/groups', { name: groupName });
      alert('그룹이 생성되었습니다!');
    };
  
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold">📦 내 그룹</h2>
        <ul className="list-disc pl-6 mb-4">
          {groups.map(group => (
            <li key={group.id}>
              <a href={`/group/${group.id}`} className="text-blue-600 hover:underline">
                {group.name}
              </a>
            </li>
          ))}
        </ul>
  
        <div className="mt-4">
          <input
            value={groupName}
            onChange={e => setGroupName(e.target.value)}
            className="border p-2 rounded w-64"
            placeholder="그룹 이름"
          />
          <button
            onClick={createGroup}
            className="ml-2 bg-green-500 text-white px-4 py-2 rounded"
          >
            그룹 생성
          </button>
        </div>
      </div>
    );
  };
  
  export default GroupPage;
  