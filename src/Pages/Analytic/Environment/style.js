import styled from "styled-components";

export const ChartsContainer = styled.div`
  width: 85%;
  height: 97%;
  margin: 0 auto;
  padding-top: 3%;
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
`;

export const LowerContainer = styled.div`
  height: 53%;
  & > img {
    width: 100%;
    height: 97%;
    margin-top: auto;
  }
`;
