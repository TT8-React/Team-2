import styled from "styled-components";

export const TableContainer = styled.table`
  width: 80%;
  border-collapse: collapse;
  font-weight: 500;
  height: fit-content;
`;

export const TableRow = styled.tr`
  display: table-row;
  border-bottom: 1px solid #d0d0d0;
`;

export const TableCol1 = styled.td`
  width: 12%;
  padding: 0.5rem 1rem;
  text-align: start;
  border: 1px solid #d0d0d0;
`;

export const TableCol2 = styled(TableCol1)`
  width: inherit;
`;
