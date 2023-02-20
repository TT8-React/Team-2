import React from "react";

import Button from "../../../Components/Button";
import MModal from "../../../Components/Modal";
import ReportCard from "../../../Components/ReportCard";

import { TopSection } from "../../../global/style";
import { Flex } from "./style";
import { PATHS } from "./../../../Routes/index";

const Report = () => {
  return (
    <>
      <TopSection>
        <Button name="Create report" />
      </TopSection>
      <Flex>
        <ReportCard title="SEBI report" path={`${PATHS.SEBI}`} />
        <ReportCard title="GRI report" path={`${PATHS.GRI}`} />
        <MModal />
      </Flex>
    </>
  );
};

export default Report;
