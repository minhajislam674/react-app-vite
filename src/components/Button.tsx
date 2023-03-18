interface Props {
  children: string;
  onClick: () => void;
  color?: "primary" | "secondary";
}

const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button className={color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
