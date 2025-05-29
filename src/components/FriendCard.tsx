// components/FriendCard.tsx
const FriendCard = ({ nickname }: { nickname: string }) => (
    <div className="border p-3 rounded bg-white shadow-sm">
      <span className="font-medium text-gray-800">{nickname}</span>
    </div>
  );
  
  export default FriendCard;

  