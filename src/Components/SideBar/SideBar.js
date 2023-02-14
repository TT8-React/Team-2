import React from "react";
import styled from "styled-components";

const Side = styled.div`
  background-color: #efefef;
  width: 20%;
  position: fixed;
  padding: 1.5rem 0;
  top: 0;
  left: 0;
  height: 100vh;
`;

const SideItem = styled.div`
  margin: 2rem 0;
  cursor: pointer;
  font-weight: bold;
`;
const Content = styled.div`
  height: 50%;
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Logo = styled.div`
  background: #d9d9d9;
  padding: 1rem 3rem;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
`;
const Items = styled.div``;
const SideBar = () => {
  return (
    <Side>
      <Content>
        <div>
          <Logo>Logo</Logo>
        </div>
        <Items>
          <SideItem>Dashboard</SideItem>
          <SideItem>Company details</SideItem>
          <SideItem>Report</SideItem>
          <SideItem>Data upload</SideItem>
          <SideItem>Analytics</SideItem>
        </Items>
      </Content>
    </Side>
  );
};

export default SideBar;
