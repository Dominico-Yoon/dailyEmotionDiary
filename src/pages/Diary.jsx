import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";

const Diary = () => {
  const params = useParams();

  return (
    <div>
      <Header
        title={"YYYY-MM-DD 기록"}
        left_child={<Button text={"< 뒤로가기"} />}
        right_child={<Button text={"수정하기"} />}
      />
      <div>
        <section>
          <h4>오늘의 감정</h4>
          <div>emotion</div>
        </section>
        <section>
          <h4>오늘의 일기</h4>
          <div>content</div>
        </section>
      </div>
    </div>
  );
};

export default Diary;
