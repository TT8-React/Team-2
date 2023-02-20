import React from "react";


import DataTab from "../../../Components/DataTab";
import ReportGrid from "../../../Components/ReportGrid";
import TowColForm from "../../../Components/TowColForm";


import { TwoColFormData } from "../../../MockData/Data";

export default function Manual() {
  return (
    <>
       <DataTab />
      <ReportGrid>
        <TowColForm data={TwoColFormData} />
      </ReportGrid>
    </>
  );
}
