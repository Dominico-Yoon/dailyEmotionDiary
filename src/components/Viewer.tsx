import { emotionList } from "../utils/constants";
import { getEmotionImage } from "../utils/get-emotion-image";
import "./css/Viewer.css";

interface Props {
  emotionId: number;
  content: string;
}

const Viewer = ({ emotionId, content }: Props) => {
  const emotionItem = emotionList.find((item) => item.emotionId === emotionId);
  if (emotionItem === undefined)
    throw new Error("emotionItem이 잘못 되었습니다.");
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
