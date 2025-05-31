import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../utils/axiosInstance';
import ReviewSection from '../components/ReviewSection';

const GroupDetailPage = () => {
  const { groupId } = useParams();
  const [group, setGroup] = useState<any>(null);
  const [inviteEmail, setInviteEmail] = useState('');

  const fetchGroupDetails = async () => {
    const res = await axiosInstance.get(`/groups/${groupId}`);
    setGroup(res.data);
  };

  const inviteMember = async () => {
    try {
      await axiosInstance.post(`/groups/${groupId}/invite`, { email: inviteEmail });
      setInviteEmail('');
      fetchGroupDetails();
      alert('초대 완료');
    } catch {
      alert('초대 실패');
    }
  };

  useEffect(() => {
    fetchGroupDetails();
  }, [groupId]);

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      <h2 className="text-2xl font-bold">그룹: {group?.name}</h2>

      
      {group?.recommendedContents?.map((content: any) => (
        <div key={content.id} className="border rounded p-2">
          <img src={content.imageUrl} alt={content.title} className="w-full h-48 object-cover mb-2 rounded" />
          <h4 className="text-md font-bold">{content.title}</h4>
          <p className="text-sm text-gray-500">{content.genre} / {content.country}</p>

          {/* 코멘트 입력 및 리스트 */}
          <ReviewSection groupId={groupId!} contentId={content.id} />
        </div>
      ))}
      <div>
        <h3 className="text-lg font-semibold mb-2">구성원 목록</h3>
        <ul className="space-y-1">
          {group?.members?.map((member: any) => (
            <li key={member.id} className="border p-2 rounded">{member.username} ({member.email})</li>
          ))}
        </ul>
      </div>

      {/* 초대 기능 */}
      <div className="flex gap-2">
        <input
          value={inviteEmail}
          onChange={e => setInviteEmail(e.target.value)}
          placeholder="이메일 입력"
          className="border p-2 flex-grow rounded"
        />
        <button onClick={inviteMember} className="bg-blue-600 text-white px-4 py-2 rounded">초대</button>
      </div>
    </div>
  );
};

export default GroupDetailPage;
