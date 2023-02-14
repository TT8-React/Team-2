import React from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  padding: 0.5rem 1.5rem;
`;
const Button = ({ title }) => {
  return <Container>{title}</Container>;
};

export default Button;
