import styled from "styled-components";

export const StyledTable = styled.table`
 border-collapse: collapse;
    margin-left: 40px;
    margin-top: 250px;

    th{
      background-color: #E5E5E5;
      border: 1px solid black;
      padding: 5px;
      width: 141px;
      height: 40px;
    }

    td{
      border: 1px solid black;
      padding: 5px 15px;
      width: 141px;
      height: 40px;
    }

    .icons-div{
      display: flex;
      justify-content: center;
      gap: 0.75rem;
    }
`