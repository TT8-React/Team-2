import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  justify-content: center;
  width: 100%;
  padding: 0.5rem;
  padding-left: 10%;
  gap: 1.5rem;
  margin-top: 1.5rem;
  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;
