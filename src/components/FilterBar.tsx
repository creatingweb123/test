// src/components/FilterBar.tsx
import { useState } from 'react';

interface Props {
  onFilterChange: (filters: { genre: string; country: string; year: string; keyword: string }) => void;
}

const FilterBar = ({ onFilterChange }: Props) => {
  const [genre, setGenre] = useState('');
  const [country, setCountry] = useState('');
  const [year, setYear] = useState('');
  const [keyword, setKeyword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilterChange({ genre, country, year, keyword });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-wrap gap-4 p-4 items-end bg-white rounded-lg shadow mb-6">
      <input
        type="text"
        placeholder="제목 검색"
        className="border p-2 rounded w-48"
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
      />
      <select value={genre} onChange={e => setGenre(e.target.value)} className="border p-2 rounded w-36">
        <option value="">장르 선택</option>
        <option value="드라마">드라마</option>
        <option value="코미디">코미디</option>
        <option value="액션">액션</option>
      </select>
      <select value={country} onChange={e => setCountry(e.target.value)} className="border p-2 rounded w-36">
        <option value="">국가 선택</option>
        <option value="한국">한국</option>
        <option value="미국">미국</option>
        <option value="일본">일본</option>
      </select>
      <select value={year} onChange={e => setYear(e.target.value)} className="border p-2 rounded w-36">
        <option value="">연도 선택</option>
        <option value="2024">2024</option>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        필터 적용
      </button>
    </form>
  );
};

export default FilterBar;
