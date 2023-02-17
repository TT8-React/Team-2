import styled from "styled-components";

export const Tab = styled.nav`
  width: 60%;
  height: 4rem;
  margin: 1.8rem auto;
  margin-top: 1%;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  font-weight: 700;
  color: #000000;
  border: 2px solid #000000;
  border-radius: 0.5rem;

  & > ul {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    list-style: none;
    height: 100%;
  }

  & > ul li:first-of-type {
    border-right: 1px solid #8f8f8f;
  }
`;
export const TabItem = styled.li`
  width: 50%;
  height: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  &.active {
    background-color: #ebebf0;
  }
`;
