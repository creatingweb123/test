import axiosInstance from "../api/axiosInstance";

import { useEffect } from "react";

import { useState } from "react";

const GroupReviewSection = ({ contentId, groupId }: { contentId: number; groupId: number }) => {
    const [reviews, setReviews] = useState<any[]>([]);
    const [text, setText] = useState('');

    useEffect(() => {
        axiosInstance.get(`/groups/${groupId}/reviews/${contentId}`).then(res => setReviews(res.data));
    }, [groupId, contentId]);

    const handleSubmit = async () => {
        await axiosInstance.post(`/groups/${groupId}/reviews`, {
        contentId,
        text,
        });
        setText('');
        const res = await axiosInstance.get(`/groups/${groupId}/reviews/${contentId}`);
        setReviews(res.data);
    };

    return (
        <div className="mt-6">
        <h3 className="text-lg font-semibold">💬 그룹 리뷰</h3>
        <textarea
            className="w-full border rounded p-2 mt-2"
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="리뷰를 작성하세요"
        />
        <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-4 py-2 mt-2 rounded"
        >
            등록
        </button>

        <ul className="mt-4 space-y-2">
            {reviews.map((review, idx) => (
            <li key={idx} className="border p-2 rounded">
                <strong>{review.authorNickname}</strong>: {review.text}
            </li>
            ))}
        </ul>
        </div>
    );
};

export default GroupReviewSection;