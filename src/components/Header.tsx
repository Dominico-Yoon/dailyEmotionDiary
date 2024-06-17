import { ReactElement } from "react";
import "./css/Header.css";

interface Props {
  title: string;
  left_child: ReactElement;
  right_child: ReactElement;
}

const Header = (props: Props) => {
  return (
    <div className="Header">
      <section className="header_left">{props.left_child}</section>
      <section className="header_center">{props.title}</section>
      <section className="header_right">{props.right_child}</section>
    </div>
  );
};

export default Header;
