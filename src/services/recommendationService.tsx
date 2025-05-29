// src/services/recommendationService.ts
import api from './api';

export interface Content {
  id: number;
  title: string;
  genre: string;
  country: string;
  ageRating: string;
  imageUrl: string;
}

export const fetchPersonalRecommendations = async (
  userId: number
): Promise<Content[]> => {
  const response = await api.get(`/contents/recommend/personal`, {
    params: { userId },
  });
  return response.data;
};
