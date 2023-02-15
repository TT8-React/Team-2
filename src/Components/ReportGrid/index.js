import React from "react";

import Accordion from "../Accordion";

import { Grid } from "./style";

import { AccordionData } from "../../MockData/Data";

const ReportGrid = ({ children }) => {
  return (
    <Grid>
      <div>
        <Accordion title="Section A" data={AccordionData} />
        <Accordion title="Section B" />
        <Accordion title="Section C" />
      </div>
      {children}
    </Grid>
  );
};

export default ReportGrid;
