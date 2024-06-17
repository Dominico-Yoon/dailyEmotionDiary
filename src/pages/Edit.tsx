import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import { useContext } from "react";
import { useDiaryDispatch } from "../App";
import Editor from "../components/Editor";
import useDiary from "../hooks/useDiary";
import usePageTitle from "../hooks/usePageTitle";
import { DiaryType } from "../types";

const Edit = () => {
  const params = useParams();
  const nav = useNavigate();
  // const { onUpdate, onDelete } = useContext(DiaryDispatchContext);
  const dispatch = useDiaryDispatch();
  usePageTitle(`${params.id}번 일기 수정`);

  // params.id를 number로 변환하고, 변환 실패 시 undefined를 반환
  const id = params.id ? Number(params.id) : undefined;

  // id가 undefined인 경우 예외 처리
  if (id === undefined) {
    return <div>잘못된 접근입니다.</div>;
  }

  const curDiaryItem = useDiary(id);

  const onSubmit = (input: DiaryType) => {
    if (window.confirm("일기를 정말 수정할까요?")) {
      dispatch.onUpdate(id, input.createdDate, input.emotionId, input.content);
    }
    nav("/", { replace: true });
  };

  const onClickDelete = () => {
    if (window.confirm("정말 삭제 하시겠습니까?")) {
      dispatch.onDelete(id);
      nav("/", { replace: true });
    }
  };

  return (
    <div>
      <Header
        title={"일기 수정하기"}
        left_child={
          <Button
            onClick={() => {
              nav(-1);
            }}
            text={"< 뒤로가기"}
          />
        }
        right_child={
          <Button onClick={onClickDelete} text={"삭제하기"} type={"NEGATIVE"} />
        }
      />
      <Editor onSubmit={onSubmit} curDiaryItem={curDiaryItem} />
    </div>
  );
};

export default Edit;
