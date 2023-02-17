import React from "react";

//  components
import Button from "../../../Components/Button";
import Layout from "../../../Components/Layout";
import ReportGrid from "../../../Components/ReportGrid";
import TableTwoCols from "../../../Components/TableTwoCols";

//  Data
import { TwoColsTableData } from "../../../MockData/Data";

const Gri = () => {
  return (
    <Layout path="GRI Report">
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
    </Layout>
  );
};

export default Gri;
