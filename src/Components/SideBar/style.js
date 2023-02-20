import { Link } from "react-router-dom";

import styled from "styled-components";

export const Side = styled.div`
  background-color: #efefef;
  width: 20%;
  position: fixed;
  padding: 1.5rem 0;
  top: 0;
  left: 0;
  height: 100vh;
  user-select: none;
`;

export const SideItem = styled(Link)`
  margin: 1rem 0;
  text-decoration: none;
  color: #000;
  padding: 0.5rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  align-items: center;
  transition: all 0.3s ease;
  &:hover {
    background-color: #d9d9d9;
  }
`;
export const MenuItem = styled.div`
  cursor: pointer;
  width: 70%;
  margin: 0.5rem 0;
  margin-left: auto;
  transition: all 0.3s ease;
  padding: 0.2rem;
  text-align: start;
  &:hover {
    background-color: #d9d9d9;
  }
`;
export const Content = styled.div`
  height: 45%;
  width: 60%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Logo = styled.h4`
  background: #d9d9d9;
  padding: 1rem 3rem;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  width: 80%;
  margin: auto;
  text-align: center;
`;
export const Items = styled.div`
  height: 200px;
`;
