const Button = ({ text, onClick, id }) => {
  return (
    <button id={id} onClick={onClick} style={{ cursor: "pointer" }}>
      {text}
    </button>
  );
};

export default Button;
