import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";

const Edit = () => {
  const params = useParams();
  return (
    <div>
      <Header
        title={"일기 수정하기"}
        left_child={<Button text={"< 뒤로가기"} />}
        right_child={<Button text={"삭제하기"} type={"NEGATIVE"} />}
      />
      <div>
        <section>
          <h4>오늘은 언제인가요?</h4>
          <input type="date" />
        </section>

        <section>
          <h4>오늘의 감정</h4>
          <div>emotion Button</div>
        </section>

        <section>
          <h4>오늘의 일기</h4>
          <textarea placeholder="오늘은 어땟나요?" />
        </section>
      </div>
      <div>
        <Button text={"취소하기"} />
        <Button text={"작성완료"} type={"POSITIVE"} />
      </div>
    </div>
  );
};

export default Edit;
