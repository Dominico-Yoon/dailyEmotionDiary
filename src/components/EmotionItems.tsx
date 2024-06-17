import { getEmotionImage } from "../utils/get-emotion-image";

import "./css/EmotionItems.css";

interface Props {
  emotionId: number;
  emotionName: string;
  isSelected: boolean;
  onClick: () => void;
}

const EmotionItems = ({
  emotionId,
  emotionName,
  isSelected,
  onClick,
}: Props) => {
  return (
    <div
      onClick={onClick}
      className={`EmotionItems ${
        isSelected ? `EmotionItem_on_${emotionId}` : ""
      }`}
    >
      <img className="emotion_image" src={getEmotionImage(emotionId)} />
      <div className="emotion_name">{emotionName}</div>
    </div>
  );
};

export default EmotionItems;
