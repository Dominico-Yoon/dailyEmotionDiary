import Header from "../components/Header";
import Button from "../components/Button";

const New = () => {
  return (
    <div className="New">
      <Header
        title={"새 일기 쓰기"}
        left_child={<Button text={"< 뒤로가기"} />}
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

export default New;
