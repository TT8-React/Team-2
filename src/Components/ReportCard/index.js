import React from "react";
import { ALink } from "../../global/style";
import { Card, Square } from "./style";

const ReportCard = ({ title = "Card report", path }) => {
  return (
    <Card>
      <Square>.</Square>
      <ALink to={`${path}`} style={{ textDecoration: "none", color: "#000" }}>
        <h5>{title}</h5>
      </ALink>
    </Card>
  );
};

export default ReportCard;
