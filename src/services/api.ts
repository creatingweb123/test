// src/services/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api', // 백엔드 주소에 맞게 수정
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
