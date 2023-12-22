const Button = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <button onClick={onClick} type="button">
      {children}
    </button>
  );
};

export default Button;
