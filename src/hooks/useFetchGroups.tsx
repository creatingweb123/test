import { useEffect, useState } from 'react';
import axiosInstance from '../utils/axiosInstance';

const useFetchGroups = () => {
  const [groups, setGroups] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axiosInstance
      .get('/groups')
      .then(res => setGroups(res.data))
      .catch(() => setError('데이터를 불러오지 못했습니다.'))
      .finally(() => setLoading(false));
  }, []);

  return { groups, loading, error };
};

export default useFetchGroups;