// import { useState } from 'react';
// import axiosInstance from '../api/axiosInstance';

// const FriendPage = () => {
//   const [keyword, setKeyword] = useState('');
//   const [results, setResults] = useState<any[]>([]);

//   const searchUser = async () => {
//     const res = await axiosInstance.get(`/users/search`, { params: { q: keyword } });
//     setResults(res.data);
//   };

//   const addFriend = async (friendId: number) => {
//     await axiosInstance.post(`/friends`, { friendId });
//     alert('친구 추가 완료');
//   };

//   return (
//     <div className="p-6 space-y-4">
//       <h2 className="text-2xl font-bold">친구 추가</h2>
//       <div className="flex gap-2">
//         <input
//           type="text"
//           className="border p-2 rounded w-full"
//           placeholder="닉네임 또는 이메일 검색"
//           value={keyword}
//           onChange={e => setKeyword(e.target.value)}
//         />
//         <button className="bg-blue-500 text-white px-4 rounded" onClick={searchUser}>검색</button>
//       </div>
//       <ul className="space-y-2">
//         {results.map(user => (
//           <li key={user.id} className="flex justify-between items-center border p-2 rounded">
//             <span>{user.nickname} ({user.email})</span>
//             <button className="bg-green-500 text-white px-3 py-1 rounded" onClick={() => addFriend(user.id)}>추가</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default FriendPage;
import { useEffect, useState } from 'react';
import axiosInstance from '../api/axiosInstance';

const FriendPage = () => {
  const [friends, setFriends] = useState<any[]>([]);
  const [searchEmail, setSearchEmail] = useState('');

  useEffect(() => {
    axiosInstance.get('/friends').then(res => setFriends(res.data));
  }, []);

  const handleAddFriend = async () => {
    await axiosInstance.post('/friends', { email: searchEmail });
    alert('친구 요청이 전송되었습니다.');
  };

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-2xl font-bold">👥 내 친구 목록</h2>
      <ul className="list-disc pl-6">
        {friends.map(friend => (
          <li key={friend.id}>{friend.nickname}</li>
        ))}
      </ul>

      <div className="mt-6 space-y-2">
        <input
          value={searchEmail}
          onChange={e => setSearchEmail(e.target.value)}
          className="border p-2 rounded w-64"
          placeholder="친구 이메일 입력"
        />
        <button
          onClick={handleAddFriend}
          className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
        >
          친구 추가
        </button>
      </div>
    </div>
  );
};

export default FriendPage;
