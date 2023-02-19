import React from "react";
import { NavLink } from "react-router-dom";
import { PATHS } from "../../Routes";
import { Tab, TabItem } from "./style";

export default function DataTab() {
  return (
    <Tab>
      <ul>
        <NavLink activeClassName="active" to={`${PATHS.DASHBOARD}/${PATHS.MANUAL}`}>
          {" "}
          <TabItem> Manual data tab </TabItem>{" "}
        </NavLink>{" "}
        <NavLink activeClassName="active" to={`${PATHS.DASHBOARD}/${PATHS.UPLOAD}`}>
          {" "}
          <TabItem> Bulk upload tab </TabItem>{" "}
        </NavLink>{" "}
      </ul>{" "}
    </Tab>
  );
}
