import React from "react";

//components
import Table from "../../../Components/Table";
import Button from "../../../Components/Button/index";
import { BackButton } from "../../../Components/TransferList/style";

export default function TableReport() {
  return (
    <>
      <BackButton>
        <Button name={"Back"} />
      </BackButton>
      <Table />
    </>
  );
}
