import React from "react";

//components
import Table from "../../../Components/Table";
import Button from "../../../Components/Button/index";

export default function TableReport() {
  return (
    <div>
      <div
        style={{
          marginLeft: "1100px",
          marginTop: "25px",
        }}
      >
        <Button name={"Back"} />
      </div>
      <Table />
    </div>
  );
}
