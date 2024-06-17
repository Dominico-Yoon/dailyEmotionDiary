import {
  useReducer,
  useRef,
  createContext,
  useEffect,
  useState,
  useMemo,
  useCallback,
  useContext,
} from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import NotFound from "./pages/NotFound";
import { DiaryType } from "./types";

type Action =
  | {
      type: "CREATE";
      data: {
        id: number;
        createdDate: number;
        emotionId: number;
        content: string;
      };
    }
  | {
      type: "UPDATE";
      data: {
        id: number;
        createdDate: number;
        emotionId: number;
        content: string;
      };
    }
  | { type: "DELETE"; id: number }
  | { type: "INIT"; data: DiaryType[] };

// state 대신 reducer 사용
function reducer(state: DiaryType[], action: Action): DiaryType[] {
  let nextState;

  switch (action.type) {
    case "CREATE": {
      nextState = [action.data, ...state];
      break;
    }

    case "UPDATE": {
      nextState = state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item
      );
      break;
    }

    case "DELETE": {
      nextState = state.filter((item) => String(item.id) !== String(action.id));
      break;
    }

    case "INIT": {
      return action.data;
    }

    default:
      return state;
  }

  localStorage.setItem("diary", JSON.stringify(nextState));
  return nextState;
}

export const DiaryStateContext = createContext<DiaryType[] | null>(null);
export const DiaryDispatchContext = createContext<{
  onCreate: (createdDate: number, emotionId: number, content: string) => void;
  onUpdate: (
    targetId: number,
    createdDate: number,
    emotionId: number,
    content: string
  ) => void;
  onDelete: (targetId: number) => void;
} | null>(null);

export function useDiaryState() {
  const state = useContext(DiaryStateContext);

  if (!state) throw new Error("Diary State에 문제 발생!!!");
  return state;
}

export function useDiaryDispatch() {
  const dispatch = useContext(DiaryDispatchContext);

  if (!dispatch) throw new Error("Diary Dispatch에 문제 발생!!!");
  return dispatch;
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(5);

  useEffect(() => {
    const storedData = localStorage.getItem("diary");

    if (!storedData) {
      setIsLoading(false);
      return;
    }

    const parsedData = JSON.parse(storedData);
    if (!Array.isArray(parsedData)) {
      setIsLoading(false);
      return;
    }

    let maxId = 0;

    parsedData.forEach((item) => {
      if (Number(item.id) > maxId) {
        maxId = Number(item.id);
      }
    });

    idRef.current = maxId + 1;

    dispatch({
      type: "INIT",
      data: parsedData,
    });
    setIsLoading(false);
  }, []);

  /** 일기 생성 함수
   *
   * @param {일기 생성 날짜} createdDate
   * @param {오늘의 감정} emotionId
   * @param {일기 내용} content
   */
  const onCreate = useCallback(
    (createdDate: number, emotionId: number, content: string) => {
      dispatch({
        type: "CREATE",
        data: {
          id: idRef.current++,
          createdDate,
          emotionId,
          content,
        },
      });
    },
    []
  );

  /** 일기 수정 함수
   *
   * @param {일기 ID} id
   * @param {일기 생성 날짜} createdDate
   * @param {오늘의 감정} emotionId
   * @param {일기 내용} content
   */
  const onUpdate = useCallback(
    (id: number, createdDate: number, emotionId: number, content: string) => {
      dispatch({
        type: "UPDATE",
        data: {
          id,
          createdDate,
          emotionId,
          content,
        },
      });
    },
    []
  );

  /** 일기 삭제 함수
   *
   * @param {일기 ID} id
   */
  const onDelete = useCallback((id: number) => {
    dispatch({
      type: "DELETE",
      id,
    });
  }, []);

  // 변하지 않는 함수들은 Memo를 통하여 한번만 렌더링 되게 끔 최적화
  const memoizedDispatch = useMemo(() => {
    return { onCreate, onUpdate, onDelete };
  }, []);

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

  // isLoading -> 마운트 되기전에 리렌더링이 되면 값이 안보이므로 설정
  if (isLoading) {
    return <div>Loading 중 입니다...!</div>;
  }

  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={memoizedDispatch}>
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
