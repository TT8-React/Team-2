import React from "react";
//  global Link
import { ALink } from "../../global/style";
//  components
import { Card, Square } from "./style";

const ReportCard = ({ title = "Card report", path }) => {
  return (
    <Card>
      <Square>.</Square>
      <ALink to={`${path}`} style={{ fontWeight: "bold" }}>
        {title}
      </ALink>
    </Card>
  );
};

export default ReportCard;
