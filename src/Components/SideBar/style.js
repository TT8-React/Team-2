import styled from "styled-components";

export const Side = styled.div`
  background-color: #efefef;
  width: 20%;
  position: fixed;
  padding: 1.5rem 0;
  top: 0;
  left: 0;
  height: 100vh;
`;

export const SideItem = styled.div`
  margin: 2rem 0;
  padding: 0.5rem 0.5rem;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;
  &:hover {
    background-color: #d9d9d9;
  }
`;
export const Content = styled.div`
  height: 50%;
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Logo = styled.div`
  background: #d9d9d9;
  padding: 1rem 3rem;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
`;
export const Items = styled.div``;
