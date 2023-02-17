import styled from "styled-components";

export const StyledTable = styled.table`
  border-collapse: collapse;
  margin-top: 100px;
  margin-left: 25px;

  th {
    background-color: #e5e5e5;
    border: 1px solid black;
    padding: 5px;
    width: 141px;
    height: 40px;
  }

  td {
    border: 1px solid black;
    padding: 5px 15px;
    width: 141px;
    height: 40px;
  }

  .icons-div {
    display: flex;
    justify-content: center;
    gap: 0.75rem;
  }

  .icons-div > img {
    cursor: pointer;
  }
`;
