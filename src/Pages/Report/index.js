import React from "react";
import Table from "../../Components/Table";
import Button from "../../Components/Button/index";

export default function Report() {
  return (
    <div>
      <div
        style={{
          position: "relative",
          left: "1120px",
          top: "25px",
        }}>
        <Button name={"Back"} />
      </div>
      <Table />
    </div>
  );
}
