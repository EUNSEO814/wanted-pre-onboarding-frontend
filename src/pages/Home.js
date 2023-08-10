import styled from "styled-components";
import { Link } from "react-router-dom";

const LinkArea = styled.div`
  background-color: inherit;
`;

const LinkSt = styled(Link)`
  background-color: inherit;
`;
const Home = () => {
  return (
    <div>
      <h1>홈</h1>
      <LinkArea>
        <LinkSt to="/signup">회원가입</LinkSt>
        <LinkSt to="/signin">로그인</LinkSt>
        <LinkSt to="/todo">Todo List</LinkSt>
      </LinkArea>
    </div>
  );
};

export default Home;
