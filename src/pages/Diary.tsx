import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";
import useDiary from "../hooks/useDiary";
import { getStringedDate } from "../utils/getStringedDate";
import usePageTitle from "../hooks/usePageTitle";
import { DiaryType } from "../types";

const Diary = () => {
  const params = useParams();
  const nav = useNavigate();
  usePageTitle(`${params.id}번 일기`);

  // params.id를 number로 변환하고, 변환 실패 시 undefined를 반환
  const id = params.id ? Number(params.id) : undefined;

  // id가 undefined인 경우 예외 처리
  if (id === undefined) {
    return <div>잘못된 접근입니다.</div>;
  }

  // const curDiaryItem = useDiary(params.id);
  const curDiaryItem = useDiary(id);
  // console.log(curDiaryItem);

  if (!curDiaryItem) {
    return <div>데이터 로딩중...!</div>;
  }

  const { createdDate, emotionId, content }: DiaryType = curDiaryItem;

  const title = getStringedDate(new Date(createdDate));

  return (
    <div>
      <Header
        title={`${title} 기록`}
        left_child={<Button onClick={() => nav(-1)} text={"< 뒤로가기"} />}
        right_child={
          <Button onClick={() => nav(`/edit/${params.id}`)} text={"수정하기"} />
        }
      />
      <Viewer emotionId={emotionId} content={content} />
    </div>
  );
};

export default Diary;
