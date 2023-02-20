import React from "react";

//  components
import Button from "../../../Components/Button";
import ReportGrid from "../../../Components/ReportGrid";
import TowColForm from "../../../Components/TowColForm";

//  Data
import { TwoColFormData } from "../../../MockData/Data";
import { useNavigate } from "react-router-dom";

const Sebi = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          marginLeft: "1100px",
          marginTop: "25px",
        }}
      >
        <Button name={"Back"} onClick={() => navigate(-1)} />
      </div>
      <ReportGrid>
        <TowColForm data={TwoColFormData} />
      </ReportGrid>
    </>
  );
};

export default Sebi;
