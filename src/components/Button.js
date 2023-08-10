import styled from "styled-components";

const ButtonSt = styled.button`
  width: 74px;
  height: 40px;
  background-color: #52616b;
  color: #ffffff;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #1e2022;
  }
`;

const Button = ({ testId, text, handleSubmit }) => {
  return (
    <ButtonSt data-testid={testId} onClick={handleSubmit}>
      {text}
    </ButtonSt>
  );
};

export default Button;
