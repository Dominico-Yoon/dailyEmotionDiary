import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { DiaryStateContext, useDiaryState } from "../App";

import Button from "../components/Button";
import Header from "../components/Header";
import DiaryList from "../components/DiaryList";
import usePageTitle from "../hooks/usePageTitle";
import { DiaryType } from "../types";

// 헤더에 있는 월에 맞춰 아이템들 필터링
const getMonthlyData = (pivotDate: Date, data: DiaryType[]) => {
  const beginTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth(),
    1,
    0,
    0,
    0
  ).getTime();

  const endTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth() + 1,
    0,
    23,
    59,
    59
  ).getTime();

  return data.filter((item) => {
    // item.createdDate >= beginTime && item.createdDate <= endTime
    const itemDate = new Date(item.createdDate).getTime();
    return itemDate >= beginTime && itemDate <= endTime;
  });
};

const Home = () => {
  // const data = useContext(DiaryStateContext);
  const data = useDiaryState();
  const [pivotDate, setPivotDate] = useState(new Date());
  usePageTitle("감정 일기장");

  // 헤더의 > 버튼 클릭시 월 증가
  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };

  // 헤더의 > 버튼 클릭시 월 감소
  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };

  const monthlyData = getMonthlyData(pivotDate, data);

  return (
    <div className="Home">
      <Header
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
        left_child={<Button onClick={onDecreaseMonth} text={"<"} />}
        right_child={<Button onClick={onIncreaseMonth} text={">"} />}
      />
      <DiaryList data={monthlyData} />
    </div>
  );
};

export default Home;
