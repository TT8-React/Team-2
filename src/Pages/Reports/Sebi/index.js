import React from "react";

//  components
import Button from "../../../Components/Button";
import Layout from "../../../Components/Layout";
import ReportGrid from "../../../Components/ReportGrid";
import TowColForm from "../../../Components/TowColForm";

//  Data
import { TwoColFormData } from "../../../MockData/Data";

const Sebi = () => {
  return (
    <Layout path="SEBI Report">
      <div
        style={{
          marginLeft: "1100px",
          marginTop: "25px",
        }}
      >
        <Button name={"Back"} />
      </div>
      <ReportGrid>
        <TowColForm data={TwoColFormData} />
      </ReportGrid>
    </Layout>
  );
};

export default Sebi;
