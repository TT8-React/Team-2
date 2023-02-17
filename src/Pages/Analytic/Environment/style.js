import styled from "styled-components";

export const ChartsContainer = styled.div`
  width: 85%;
  height: 97%;
  margin: 0 auto;
  padding-top: 3%;
  &.dashboard {
    padding-top: 1.5%;
  }
`;
export const UpperContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 45%;
  margin-bottom: 2%;
  img {
    width: 45%;
    height: 97%;
  }
  &.dashboard {
    height: 45%;
    margin-bottom: 2.5%; 
  }
  &.dashboard div {
    width: 45%;
  }
  &.dashboard img {
    width: 100%;
    height: 90%;
  }
`;

export const LowerContainer = styled.div`
  height: 53%;
  & > img {
    width: 100%;
    height: 97%;
    margin-top: auto;
  }

  &.dashboard {
    height: 48%;
  }
  &.dashboard img {
    height: 90%;
  }
`;
export const Name = styled.h3`
  font-weight: 600;
  font-size: 24px;
  color: #000000;
  padding-bottom: 8px;
`;
