import React from "react";

import chart1 from "../../../Assets/chart1.png";
import chart3 from "../../../Assets/chart3.png";

import {
  ChartsContainer,
  LowerContainer,
  UpperContainer,
} from "../Environment/style";

export default function Social() {
  return (
    <ChartsContainer>
      <UpperContainer>
        <img src={chart1} alt="chart" />
        <img src={chart1} alt="chart" />
      </UpperContainer>
      <LowerContainer>
        <img src={chart3} alt="chart" />
      </LowerContainer>
    </ChartsContainer>
  );
}
