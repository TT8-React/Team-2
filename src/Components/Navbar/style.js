import styled from "styled-components";
import avatar from "../../Assets/Avatar.png";

export const Nav = styled.div`
  background-color: #4f4f4f;
  color: #fff;
  position: fixed;
  top: 0;
  left: 20%;
  padding: 1rem;
  width: 80%;
`;
export const Flex = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
`;
export const Avatar = styled.div`
  background: url(${avatar});
  background-position: center center;
  background-size: cover;
  width: 45px;
  height: 45px;
`;
