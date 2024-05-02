import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getStringedDate } from "../utils/getStringedDate";
import { emotionList } from "../utils/constants";

import "./css/Editor.css";
import Button from "./Button";
import EmotionItems from "./EmotionItems";

const Editor = ({ onSubmit }) => {
  const nav = useNavigate();

  const [input, setInput] = useState({
    createdDate: new Date(),
    emotionId: 3,
    content: "",
  });

  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "createdDate") {
      value = new Date(value);
    }

    setInput({
      ...input,
      [name]: value,
    });
  };

  const onClickSubmit = () => {
    onSubmit(input);
  };

  return (
    <div className="Editor">
      <section className="date_section">
        <h4>오늘은 언제인가요?</h4>
        <input
          name="createdDate"
          onChange={onChangeInput}
          value={getStringedDate(input.createdDate)}
          type="date"
        />
      </section>

      <section className="emotion_section">
        <h4>오늘의 감정</h4>
        <div className="emotion_wrapper">
          {emotionList.map((item) => (
            <EmotionItems
              onClick={() =>
                onChangeInput({
                  target: { name: "emotionId", value: item.emotionId },
                })
              }
              key={item.emotionId}
              {...item}
              isSelected={item.emotionId === input.emotionId}
            />
          ))}
        </div>
      </section>

      <section className="content_section">
        <h4>오늘의 일기</h4>
        <textarea
          name="content"
          value={input.content}
          onChange={onChangeInput}
          placeholder="오늘은 어땟나요?"
        />
      </section>

      <section className="button_section">
        <Button onClick={() => nav(-1)} text={"취소하기"} />
        <Button onClick={onClickSubmit} text={"작성완료"} type={"POSITIVE"} />
      </section>
    </div>
  );
};

export default Editor;
