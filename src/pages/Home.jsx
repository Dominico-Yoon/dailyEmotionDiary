import { Link } from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="Home">
      <Header
        title={"YYYY-MM-DD"}
        left_child={<Button text={"<"} />}
        right_child={<Button text={">"} />}
      />
      <Link to={"/new"}>새로 만들기</Link>
      <Link to={"/diary/1"}>일기</Link>
      <Link to={"/edit/1"}>일기 수정</Link>
    </div>
  );
};

export default Home;
