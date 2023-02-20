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
  position: relative;
  cursor: pointer;
  background: url(${avatar});
  background-position: center center;
  background-size: cover;
  width: 45px;
  height: 45px;
  transition: all 0.2s ease;
  &:hover {
    transform: scale(0.95);
  }
`;
export const PageName = styled.p`
  text-transform: capitalize;
  font-weight: bold;
`;
export const Menu = styled.div`
  position: absolute;
  top: 120%;
  left: 50%;
  transform: translate(-50%);
  z-index: 100;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  height: ${(props) => (props.show ? "auto" : "0px")};
  transition: height 0.3s ease-in-out;
  border-radius: 5px;
  padding: 1rem;
  font-weight: bold;

  &::before {
    content: "";
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translateX(-50%) rotate(180deg);
    border-top: 10px solid #fff;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    width: 0;
    z-index: 57855;
  }
`;

export const MenuItem = styled.div`
  font-size: 16px;
  width: fit-content;
  white-space: nowrap;
`;
