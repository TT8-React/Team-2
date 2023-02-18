import { Typography } from "@mui/material";
import styled from "styled-components";

export const Close = styled.p`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  text-align: center;
  padding: 0.1rem;
  &:hover {
    transform: scale(1.1);
  }
`;
export const Line = styled.hr`
  margin: -1rem -1.5rem 1.5rem;
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
