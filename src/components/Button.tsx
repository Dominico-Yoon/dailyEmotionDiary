import "./css/Button.css";

interface Props {
  text: string;
  type?: string;
  onClick: () => void;
}

const Button = (props: Props) => {
  return (
    <button onClick={props.onClick} className={`Button Button_${props.type}`}>
      {props.text}
    </button>
  );
};

export default Button;
