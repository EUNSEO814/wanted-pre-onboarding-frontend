import styled from "styled-components";

const InputSt = styled.input`
  padding: 5px 12px;
  width: 200px;
  height: 34px;
  border-radius: 5px;
  border: solid 1px #dedede;
  &:focus {
    border: solid 1px #52616b;
    outline: 3px solid #c9d6df;
  }
`;

const Input = ({ testId, type, placeholder, onChange, value }) => {
  return (
    <InputSt
      data-testid={testId}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;
