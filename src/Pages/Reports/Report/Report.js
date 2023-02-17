import React from "react";
import Button from "../../../Components/Button";
import Layout from "../../../Components/Layout";
import MModal from "../../../Components/Modal";
import ReportCard from "../../../Components/ReportCard";
import { TopSection } from "../../../global/style";
import { Flex } from "./style";

const Report = () => {
  return (
    <>
      <TopSection>
        <Button name="Create report" />
      </TopSection>
      <Flex>
        <ReportCard title="SEBI report" path="/sebi" />
        <ReportCard title="GRI report" path="/gri" />
        <MModal />
      </Flex>
    </>
  );
};

export default Report;
