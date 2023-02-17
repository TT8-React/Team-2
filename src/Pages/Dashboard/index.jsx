import React from "react";

import {
  ChartsContainer,
  LowerContainer,
  Name,
  UpperContainer,
} from "../Analytic/Environment/style";

import chart1 from "../../Assets/chart1.png";
import chart2 from "../../Assets/chart2.png";
import chart3 from "../../Assets/chart3.png";

export default function Dashboard() {
  return (
    <ChartsContainer className="dashboard">
      <UpperContainer className="dashboard">
        <div>
          <Name>Chart1</Name>
          <img src={chart1} alt="chart" />
        </div>
        <div>
          <Name>Chart2</Name>
          <img src={chart2} alt="chart" />
        </div>
      </UpperContainer>
      <LowerContainer className="dashboard">
        <Name>Chart3</Name>
        <img src={chart3} alt="chart" />
      </LowerContainer>
    </ChartsContainer>
  );
}
