import React from "react";
import { NavLink } from "react-router-dom";
import { PATHS } from "../../Routes";
import { Tab, TabItem } from "./style";

export default function DataTab() {
  return (
    <Tab>
      <ul>
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "none")}
          to={`${PATHS.MANUAL}`}
        >
          {" "}
          <TabItem> Manual data tab </TabItem>{" "}
        </NavLink>{" "}
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "none")}
          to={`${PATHS.UPLOAD}`}
        >
          {" "}
          <TabItem> Bulk upload tab </TabItem>{" "}
        </NavLink>{" "}
      </ul>{" "}
    </Tab>
  );
}
