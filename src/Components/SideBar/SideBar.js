import React, { useState } from "react";
import closed from "../../Assets/ClosedArrow.png";
import opened from "../../Assets/OpenedArrow.png";
import { ALink } from "../../global/style";
import { PATHS } from "../../Routes";
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
            <ALink to={PATHS.DASHBOARD}>Dashboard</ALink>
          </SideItem>
          <SideItem
            active={activeItem === "company_details"}
            onClick={() => handleItemClick("company_details")}
          >
            <ALink to={PATHS.COMPANY_DETAILS}> Company details</ALink>
          </SideItem>
          <SideItem
            active={activeItem === "report"}
            onClick={() => {
              handleItemClick("report");
              setOpenReport(!openReport);
            }}
          >
            <ALink to={PATHS.REPORT} color="#000">
              Report
            </ALink>
            <img src={openReport ? opened : closed} alt="arrow" />
          </SideItem>
          {openReport && (
            <MenuItem>
              <ALink to={PATHS.MY_REPORT}>My Report</ALink>
            </MenuItem>
          )}
          <SideItem
            active={activeItem === "data_upload"}
            onClick={() => handleItemClick("data_upload")}
          >
            <ALink to={PATHS.MANUAL}> Data upload</ALink>
          </SideItem>
          <SideItem
            active={activeItem === "analytics"}
            onClick={() => {
              handleItemClick("analytics");
              setOpenAnalytics(!openAnalytics);
            }}
          >
            Analytics <img src={openAnalytics ? opened : closed} alt="arrow" />
          </SideItem>
          {openAnalytics && (
            <>
              <MenuItem>
                <ALink to={PATHS.ENVIRONMENT}>Environment</ALink>
              </MenuItem>
              <MenuItem>
                <ALink to={PATHS.SOCIAL}>Social</ALink>
              </MenuItem>
              <MenuItem>
                <ALink to={PATHS.GOVERNANCE}>Governance</ALink>
              </MenuItem>
            </>
          )}
        </Items>
      </Content>
    </Side>
  );
};

export default SideBar;
