import Button from "./Button";
import { getEmotionImage } from "../utils/get-emotion-image.js";
import "./css/DiaryItem.css";
import { useNavigate } from "react-router-dom";
import { DiaryType } from "../types";

const DiaryItem = (props: DiaryType) => {
  const nav = useNavigate();
  return (
    <div className="DiaryItem">
      <section
        onClick={() => nav(`/diary/${props.id}`)}
        className="emotion_wrapper"
      >
        <img
          className={`img_section img_section_${props.emotionId}`}
          src={getEmotionImage(props.emotionId)}
        />
      </section>
      <section
        onClick={() => nav(`/diary/${props.id}`)}
        className="content_wrapper"
      >
        <div className="createdDate">
          {new Date(props.createdDate).toLocaleDateString()}
        </div>
        <div className="content">{props.content}</div>
      </section>
      <section className="button">
        <Button onClick={() => nav(`/edit/${props.id}`)} text={"수정하기"} />
      </section>
    </div>
  );
};

export default DiaryItem;
