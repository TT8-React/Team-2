import React from "react";

import { Side, Content, Items, SideItem, Logo } from "./style";

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
