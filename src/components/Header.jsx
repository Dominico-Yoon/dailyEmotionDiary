import "./css/Header.css";

const Header = ({ title, left_child, right_child }) => {
  return (
    <div className="Header">
      <section className="header_left">{left_child}</section>
      <section className="header_center">{title}</section>
      <section className="header_right">{right_child}</section>
    </div>
  );
};

export default Header;
