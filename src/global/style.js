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
export const Spinner = styled.div`
  border: 3px solid #fff;
  border-top: 3px #000 solid;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  animation: spin 0.5s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
