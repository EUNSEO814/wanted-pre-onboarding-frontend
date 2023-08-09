const Button = ({ testId, text }) => {
  return <button data-testid={testId}>{text}</button>;
};

export default Button;
