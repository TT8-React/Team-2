import React from "react";
import { Tab, TabItem } from "./style";

export default function DataTab() {
  return (
    <Tab>
      <ul>
        <TabItem> Manual data tab </TabItem>{" "}
        <TabItem> Bulk upload tab </TabItem>{" "}
      </ul>{" "}
    </Tab>
  );
}
