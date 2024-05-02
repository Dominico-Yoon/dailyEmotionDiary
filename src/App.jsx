import { useReducer, useRef, createContext } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import NotFound from "./pages/NotFound";

const mockData = [
  {
    id: 1,
    createdDate: new Date("2024-04-21").getTime(),
    emotionId: 1,
    content: "1번 일기입니다.",
  },
  {
    id: 2,
    createdDate: new Date("2024-04-28").getTime(),
    emotionId: 2,
    content: "2번 일기입니다.",
  },
  {
    id: 3,
    createdDate: new Date("2024-04-22").getTime(),
    emotionId: 4,
    content: "3번 일기입니다.",
  },
  {
    id: 4,
    createdDate: new Date("2024-04-29").getTime(),
    emotionId: 5,
    content: "4번 일기입니다.",
  },
];

// state 대신 reducer 사용
function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];

    case "UPDATE":
      return state.map((item) =>
        String(item.id) === String(action.data.targetId) ? action.data : item
      );

    case "DELETE":
      return state.filter(
        (item) => String(item.id) !== String(action.targetId)
      );

    default:
      return state;
  }
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(5);

  /** 일기 생성 함수
   *
   * @param {일기 생성 날짜} createdDate
   * @param {오늘의 감정} emotionId
   * @param {일기 내용} content
   */
  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  /** 일기 수정 함수
   *
   * @param {일기 ID} id
   * @param {일기 생성 날짜} createdDate
   * @param {오늘의 감정} emotionId
   * @param {일기 내용} content
   */
  const onUpdate = (targetId, createdDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        targetId,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  /** 일기 삭제 함수
   *
   * @param {일기 ID} id
   */
  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    });
  };

  // TEST용
  //   <Button
  //   onClick={() => {onCreate(new Date().getTime(), 5, "3번 일기 추가!!!!");}}
  //   text={"일기 생성"} />
  //
  // <Button
  //   onClick={() => {onUpdate(2, new Date().getTime(), 4, "2번 일기 수정!!!!!!!");}}
  //   text={"일기 수정"} />
  //
  // <Button
  //   onClick={() => {onDelete(1);}}
  //   text={"일기 삭제"} />

  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;
