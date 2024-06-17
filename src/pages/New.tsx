import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useContext, useState } from "react";
import { DiaryDispatchContext, useDiaryDispatch } from "../App";
import { useNavigate } from "react-router-dom";
import usePageTitle from "../hooks/usePageTitle";
import { DiaryType } from "../types";

const New = () => {
  // const { onCreate } = useContext(DiaryDispatchContext);
  const dispatch = useDiaryDispatch();
  const nav = useNavigate();
  usePageTitle("새 일기 쓰기");

  const onSubmit = (input: DiaryType) => {
    const createdDate = new Date(input.createdDate).getTime();
    dispatch.onCreate(createdDate, input.emotionId, input.content);
    nav("/", { replace: true });
  };
  return (
    <div className="New">
      <Header
        title={"새 일기 쓰기"}
        left_child={<Button onClick={() => nav(-1)} text={"< 뒤로가기"} />}
      />
      <Editor onSubmit={onSubmit} />
    </div>
  );
};

export default New;
