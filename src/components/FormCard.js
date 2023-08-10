import styled from "styled-components";

const FormSt = styled.form`
  width: 300px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  border-radius: 5px;
  border: solid 1px #dedede;
  background-color: white;
`;
const FormCard = ({ children }) => {
  return (
    <>
      <FormSt>{children}</FormSt>
    </>
  );
};

export default FormCard;
