import React, { useState } from "react";
import closed from "../../Assets/ClosedArrow.png";
import opened from "../../Assets/OpenedArrow.png";
import { Side, Content, Items, SideItem, Logo, MenuItem } from "./style";

const SideBar = () => {
  const [activeItem, setActiveItem] = useState("dashboard");
  const [openReport, setOpenReport] = useState(false);
  const [openAnalytics, setOpenAnalytics] = useState(false);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <Side>
      <Content>
        <div>
          <Logo>Logo</Logo>
        </div>
        <Items>
          <SideItem
            active={activeItem === "dashboard"}
            onClick={() => handleItemClick("dashboard")}
          >
            Dashboard
          </SideItem>
          <SideItem
            active={activeItem === "company_details"}
            onClick={() => handleItemClick("company_details")}
          >
            Company details
          </SideItem>
          <SideItem
            active={activeItem === "report"}
            onClick={() => {
              setOpenReport(!openReport);
              handleItemClick("report");
            }}
          >
            Report <img src={openReport ? opened : closed} alt="arrow" />
          </SideItem>
          {openReport && <MenuItem>My Report</MenuItem>}
          <SideItem
            active={activeItem === "data_upload"}
            onClick={() => handleItemClick("data_upload")}
          >
            Data upload
          </SideItem>
          <SideItem
            active={activeItem === "analytics"}
            onClick={() => {
              setOpenAnalytics(!openAnalytics);
              handleItemClick("analytics");
            }}
          >
            Analytics <img src={openAnalytics ? opened : closed} alt="arrow" />
          </SideItem>
          {openAnalytics && (
            <>
              <MenuItem>Environment</MenuItem>
              <MenuItem>Social</MenuItem>
              <MenuItem>Governance</MenuItem>
            </>
          )}
        </Items>
      </Content>
    </Side>
  );
};

export default SideBar;
