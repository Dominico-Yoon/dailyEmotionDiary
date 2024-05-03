import Button from "./Button";
import { getEmotionImage } from "../utils/get-emotion-image.js";
import "./css/DiaryItem.css";
import { useNavigate } from "react-router-dom";

const DiaryItem = ({ id, createdDate, emotionId, content }) => {
  const nav = useNavigate();
  return (
    <div className="DiaryItem">
      <section onClick={() => nav(`/diary/${id}`)} className="emotion_wrapper">
        <img
          className={`img_section img_section_${emotionId}`}
          src={getEmotionImage(emotionId)}
        />
      </section>
      <section onClick={() => nav(`/diary/${id}`)} className="content_wrapper">
        <div className="createdDate">
          {new Date(createdDate).toLocaleDateString()}
        </div>
        <div className="content">{content}</div>
      </section>
      <section className="button">
        <Button onClick={() => nav(`/edit/${id}`)} text={"수정하기"} />
      </section>
    </div>
  );
};

export default DiaryItem;
