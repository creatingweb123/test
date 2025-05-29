// src/mocks/groupDetailMock.ts
export const mockGroupDetail = {
    id: 1,
    name: 'SF 영화 매니아',
    memberCount: 4,
    commonGenres: ['SF', '스릴러'],
    ageRating: '15+',
  };
  
  export const mockGroupRecommendations = [
    {
      id: 201,
      title: '인터스텔라',
      genre: 'SF',
      country: '미국',
      ageRating: '15+',
      imageUrl: 'https://via.placeholder.com/300x200?text=Interstellar',
    },
    {
      id: 202,
      title: '승리호',
      genre: 'SF',
      country: '한국',
      ageRating: '12+',
      imageUrl: 'https://via.placeholder.com/300x200?text=Space+Sweepers',
    },
  ];
  
  export const mockComments = [
    { id: 1, user: 'user1', text: '이 영화 진짜 좋았어요!' },
    { id: 2, user: 'user2', text: '다 같이 보기 딱인 콘텐츠네요.' },
  ];
  