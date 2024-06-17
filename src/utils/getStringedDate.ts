export const getStringedDate = (targetDate: Date): string => {
  // 날짜를 YYYY-MM-DD 로 변환 시켜줘야함
  let year = targetDate.getFullYear();
  let month = (targetDate.getMonth() + 1).toString();
  let day = targetDate.getDate().toString();

  if (parseInt(month) < 10) {
    month = `0${month}`;
  }

  if (parseInt(day) < 10) {
    day = `0${day}`;
  }

  return `${year}-${month}-${day}`;
};
