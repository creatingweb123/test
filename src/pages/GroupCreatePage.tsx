import { useState, useEffect } from 'react';
import axiosInstance from '../api/axiosInstance';

const GroupCreatePage = () => {
  const [name, setName] = useState('');
  const [friends, setFriends] = useState<any[]>([]);
  const [selectedFriends, setSelectedFriends] = useState<number[]>([]);

  const fetchFriends = async () => {
    const res = await axiosInstance.get('/friends');
    setFriends(res.data);
  };

  const toggleSelect = (id: number) => {
    setSelectedFriends(prev =>
      prev.includes(id) ? prev.filter(fid => fid !== id) : [...prev, id]
    );
  };

  const createGroup = async () => {
    await axiosInstance.post('/groups', {
      name,
      memberIds: selectedFriends,
    });
    alert('그룹 생성 완료');
  };

  useEffect(() => {
    fetchFriends();
  }, []);

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-2xl font-bold">그룹 생성</h2>
      <input
        type="text"
        placeholder="그룹 이름"
        className="border p-2 w-full rounded"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <h3 className="font-semibold">친구 선택</h3>
      <ul className="space-y-2">
        {friends.map(friend => (
          <li
            key={friend.id}
            className={`border p-2 rounded cursor-pointer ${selectedFriends.includes(friend.id) ? 'bg-blue-100' : ''}`}
            onClick={() => toggleSelect(friend.id)}
          >
            {friend.nickname}
          </li>
        ))}
      </ul>
      <button onClick={createGroup} className="bg-blue-500 text-white px-4 py-2 rounded">생성하기</button>
    </div>
  );
};

export default GroupCreatePage;
