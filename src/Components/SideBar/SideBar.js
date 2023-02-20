import React, { useState } from "react";
import { NavLink } from "../../global/style";
import closed from "../../Assets/ClosedArrow.png";
import opened from "../../Assets/OpenedArrow.png";
import { PATHS } from "../../Routes";
import { Side, Content, Items, SideItem, Logo, MenuItem } from "./style";

const SideBar = () => {
  const [openReport, setOpenReport] = useState(false);
  const [openAnalytics, setOpenAnalytics] = useState(false);

  return (
    <Side>
      <Content>
        <div>
          <Logo>Logo</Logo>
        </div>
        <Items>
          <SideItem>
            <NavLink to={PATHS.DASHBOARD}>Dashboard</NavLink>
          </SideItem>
          <SideItem>
            <NavLink to={PATHS.COMPANY_DETAILS}>Company Details</NavLink>
          </SideItem>
          <SideItem
            onClick={() => {
              setOpenReport(!openReport);
            }}
          >
            <NavLink to={PATHS.REPORT}>Report</NavLink>

            <img src={openReport ? opened : closed} alt="arrow" />
          </SideItem>
          {openReport && (
            <MenuItem>
              <NavLink to={PATHS.MY_REPORT}>My Report</NavLink>
            </MenuItem>
          )}
          <SideItem>
            <NavLink to={PATHS.MANUAL}> Data upload</NavLink>
          </SideItem>
          <SideItem
            onClick={() => {
              setOpenAnalytics(!openAnalytics);
            }}
          >
            Analytics <img src={openAnalytics ? opened : closed} alt="arrow" />
          </SideItem>
          {openAnalytics && (
            <>
              <MenuItem>
                <NavLink to={PATHS.ENVIRONMENT}>Environment</NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink to={PATHS.SOCIAL}>Social</NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink to={PATHS.GOVERNANCE}>Governance</NavLink>
              </MenuItem>
            </>
          )}
        </Items>
      </Content>
    </Side>
  );
};

export default SideBar;
