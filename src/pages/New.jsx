import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useContext, useState } from "react";
import { DiaryDispatchContext } from "../App";
import { useNavigate } from "react-router-dom";

const New = () => {
  const { onCreate } = useContext(DiaryDispatchContext);
  const nav = useNavigate();

  const onSubmit = (input) => {
    onCreate(input.createdDate.getTime(), input.emotionId, input.content);
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
