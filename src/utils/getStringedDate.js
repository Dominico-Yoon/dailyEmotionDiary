export const getStringedDate = (targetDate) => {
  // 날짜를 YYYY-MM-DD 로 변환 시켜줘야함
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let day = targetDate.getDate();

  if (month < 10) {
    month = `0${month}`;
  }

  if (day < 10) {
    day = `0${day}`;
  }

  return `${year}-${month}-${day}`;
};
