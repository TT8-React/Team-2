import React from "react";
import styled from "styled-components";
const Content = styled.div`
  margin-left: 20%;
  margin-top: 6em;
  padding: 0 1rem;
`;
const Main = ({ children }) => {
  return <Content>{children}</Content>;
};

export default Main;
