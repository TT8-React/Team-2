import styled from "styled-components";
import avatar from "../../Assets/Avatar.png";

export const Nav = styled.nav`
  background-color: #4f4f4f;
  color: #fff;
  position: fixed;
  top: 0;
  left: 20%;
  padding: 1rem;
  width: 80%;
  height: 11%;
  z-index: 100;
`;
export const Flex = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
`;
export const Logout = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 9%;
    font-size: 2rem;
`;
export const Avatar = styled.div`
  background: url(${avatar});
  background-position: center center;
  background-size: cover;
  width: 45px;
  height: 45px;
`;
export const PageName = styled.p`
  text-transform: capitalize;
  font-weight: bold;
`;
