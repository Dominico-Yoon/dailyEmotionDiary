import { useContext, useEffect, useState } from "react";
import { DiaryStateContext, useDiaryState } from "../App";
import { useNavigate } from "react-router-dom";
import { DiaryType } from "../types";

const useDiary = (id: number) => {
  // const data = useContext(DiaryStateContext);
  const data = useDiaryState();
  const [curDiaryItem, setCurDiaryItem] = useState<DiaryType | undefined>(
    undefined
  );
  const nav = useNavigate();

  useEffect(() => {
    const currentDiaryItem = data.find(
      (item) => String(item.id) === String(id)
    );

    if (!currentDiaryItem) {
      window.alert("존재 하지 않는 일기입니다.");
      nav("/", { replace: true });
    }

    setCurDiaryItem(currentDiaryItem);
  }, [id, data]);

  return curDiaryItem;
};

export default useDiary;
