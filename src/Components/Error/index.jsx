import React from "react";
import styled from "styled-components";

const ErrorMsg = styled.div`
  color: #f00;
`;
const Error = ({ msg }) => {
  return <ErrorMsg> {msg} </ErrorMsg>;
};

export default Error;
