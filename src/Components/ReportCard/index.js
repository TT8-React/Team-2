import React from "react";
import { Link } from "react-router-dom";
import { Card, Square } from "./style";

const ReportCard = ({ title = "Card report", path }) => {
  return (
    <Card>
      <Square>.</Square>
      <Link to={`${path}`} style={{ textDecoration: "none", color: "#000" }}>
        <h5>{title}</h5>
      </Link>
    </Card>
  );
};

export default ReportCard;
