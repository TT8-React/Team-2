import { TableCol1, TableCol2, TableContainer, TableRow } from "./style";

const TableTwoCols = ({ data }) => (
  <TableContainer>
    {data?.map((item) => {
      const { id, body } = item;
      return (
        <TableRow key={id}>
          <TableCol1>{id}</TableCol1>
          <TableCol2>{body}</TableCol2>
        </TableRow>
      );
    })}
  </TableContainer>
);

export default TableTwoCols;
