import styled from "styled-components";
import { Link } from "react-router-dom";

export const FlexCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10%;
`;
export const ALink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.color || "#000"};
`;
export const TopSection = styled.div`
  border-bottom: 1px solid black;
  height: 94px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: right;

  Button {
    margin-right: 60px;
  }
`;
