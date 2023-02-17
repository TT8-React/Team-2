import styled from "styled-components";

export const InputsWraper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 35px;
  row-gap: 2rem;
  width: 90%;
  margin: 1rem auto;
`;
export const InputGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1em;
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
