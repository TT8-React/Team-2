import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AnalysisMenu from "./AnalysisMenu";
import SideMenu from "./SideMenu";

const Side = styled.div`
  background-color: #efefef;
  width: 20%;
  position: fixed;
  padding: 1.5rem 0;
  top: 0;
  left: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5em;
`;
const Flex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const SideItem = styled.div`
  margin: 0.2rem 0;
`;
const SideBar = () => {
  return (
    <Side>
      <h4>Logo</h4>
      <Flex>
        <SideItem>
          <Link>Dashboard</Link>
        </SideItem>
        <SideItem>
          <Link>Company details</Link>
        </SideItem>
        <SideItem>
          <SideMenu title="Report" />
        </SideItem>
        <SideItem>
          <Link>Data upload</Link>
        </SideItem>
        <SideItem>
          <AnalysisMenu title="Analytics" />
        </SideItem>
      </Flex>
    </Side>
  );
};

export default SideBar;
