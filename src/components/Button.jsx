import "./css/Button.css";

const Button = ({ text, type, onClick }) => {
  return (
    <div className="Button">
      <button onClick={onClick} className={`Button Button_${type}`}>
        {text}
      </button>
    </div>
  );
};

export default Button;
