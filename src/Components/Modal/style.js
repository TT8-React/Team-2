import { Typography } from "@mui/material";
import styled from "styled-components";

export const Close = styled.p`
  cursor: pointer;
  display: grid;
  place-items: center;
  transition: all 0.2s ease;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  text-align: center;
  &:hover {
    transform: rotate(360);
  }
`;
export const Line = styled.hr`
  margin: -1rem -2rem 2rem;
  border: 1px solid #000;
`;
export const CustomTypography = styled(Typography)`
  color: #000;
  padding: 1rem 0;
`;
export const Flex = styled.div`
  display: flex;
  gap: 4rem;
  margin: auto;
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;
export const style1 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
};
