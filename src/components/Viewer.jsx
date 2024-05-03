import { emotionList } from "../utils/constants";
import { getEmotionImage } from "../utils/get-emotion-image";
import "./css/Viewer.css";

const Viewer = ({ emotionId, content }) => {
  const emotionItem = emotionList.find((item) => item.emotionId === emotionId);
  return (
    <div className="Viewer">
      <section>
        <h4>오늘의 감정</h4>
        <div className={`emotion_img emotion_img_${emotionId}`}>
          <img src={getEmotionImage(emotionId)} />
          <div>{emotionItem.emotionName}</div>
        </div>
      </section>

      <section className="content_section">
        <h4>오늘의 일기</h4>
        <div className="content_wrapper">
          <p>{content}</p>
        </div>
      </section>
    </div>
  );
};

export default Viewer;
