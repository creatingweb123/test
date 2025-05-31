export const handleError = (error: any) => {
    if (error.response?.data?.message) {
      alert(error.response.data.message);
    } else {
      alert('알 수 없는 오류가 발생했습니다.');
    }
  };
  