import React from "react";

//  components
import Button from "../../../Components/Button";
import ReportGrid from "../../../Components/ReportGrid";
import TableTwoCols from "../../../Components/TableTwoCols";

//  Data
import { TwoColsTableData } from "../../../MockData/Data";
import { useNavigate } from 'react-router-dom';

const Gri = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          marginLeft: "1100px",
          marginTop: "25px",
        }}
      >
        <Button name={"Back"} onClick={()=>navigate(-1)}/>
      </div>
      <ReportGrid>
        <TableTwoCols data={TwoColsTableData} />
      </ReportGrid>
    </>
  );
};

export default Gri;
