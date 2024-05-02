import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "./Button";
import DiaryItem from "./DiaryItem";
import "./css/DiaryList.css";

const DiaryList = ({ data }) => {
  const [sortLate, setSortLate] = useState("latest");
  const [sortEmotion, setSortEmotion] = useState("all");
  const nav = useNavigate();

  const onChangeSort = (e) => {
    setSortLate(e.target.value);
  };

  const onChangeEmotion = (e) => {
    setSortEmotion(e.target.value);
  };

  const getSortedData = () => {
    switch (sortEmotion) {
      case "good":
        return data
          .filter((item) => item.emotionId === 1 || item.emotionId === 2)
          .toSorted((a, b) => {
            if (sortLate === "oldest") {
              return a.createdDate - b.createdDate;
            } else {
              return b.createdDate - a.createdDate;
            }
          });
      case "bad":
        return data
          .filter((item) => item.emotionId === 4 || item.emotionId === 5)
          .toSorted((a, b) => {
            if (sortLate === "oldest") {
              return a.createdDate - b.createdDate;
            } else {
              return b.createdDate - a.createdDate;
            }
          });
      default:
        return data.toSorted((a, b) => {
          if (sortLate === "oldest") {
            return a.createdDate - b.createdDate;
          } else {
            return b.createdDate - a.createdDate;
          }
        });
    }
  };

  const sortedData = getSortedData();

  return (
    <div className="DiaryList">
      <section className="filter_wrapper">
        <select onChange={onChangeSort}>
          <option value={"latest"}>최신순</option>
          <option value={"oldest"}>오래된 순</option>
        </select>

        <select onChange={onChangeEmotion}>
          <option value={"all"}>전부다</option>
          <option value={"good"}>좋은 감정만</option>
          <option value={"bad"}>안좋은 감정만</option>
        </select>

        <Button
          onClick={() => nav("/new")}
          text={"새 일기쓰기"}
          type={"POSITIVE"}
        />
      </section>
      <section className="list_wrapper">
        {sortedData.map((item) => (
          <DiaryItem key={item.id} {...item} />
        ))}
      </section>
    </div>
  );
};

export default DiaryList;
