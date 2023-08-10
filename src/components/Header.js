import styled from "styled-components";

const HeaderSt = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100px;
  color: #f0f5f9;

  background-color: #1e2022;
`;

const TiTle = styled.div`
  font-size: xxx-large;
  background-color: inherit;
`;

const Header = () => {
  return (
    <header>
      <HeaderSt>
        <TiTle>김은서</TiTle>
      </HeaderSt>
    </header>
  );
};

export default Header;
