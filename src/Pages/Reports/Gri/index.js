import React from "react";

//  components
import Button from "../../../Components/Button";
import ReportGrid from "../../../Components/ReportGrid";
import TableTwoCols from "../../../Components/TableTwoCols";

//  Data
import { TwoColsTableData } from "../../../MockData/Data";

const Gri = () => {
  return (
    <>
      <div
        style={{
          marginLeft: "1100px",
          marginTop: "25px",
        }}
      >
        <Button name={"Back"} />
      </div>
      <ReportGrid>
        <TableTwoCols data={TwoColsTableData} />
      </ReportGrid>
    </>
  );
};

export default Gri;
