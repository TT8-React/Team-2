import React from "react";
import Button from "../../Components/Button";
import { CompanyDetailsData } from "../../MockData/Data";
import { Container } from "./style";

export default function CompanyDetails() {
  return (
    <>
      <div
        style={{
          marginTop: "45px",
          marginLeft: "1rem",
          width: "95%",
          display: "flex",
          justifyContent: "end",
        }}
      >
        <Button name={"Edit company details"} />{" "}
      </div>
      <Container>
        {CompanyDetailsData.map((item) => {
          return (
            <div key={item.id}>
              <p> {item.name} </p> <h4> {item.text} </h4>{" "}
            </div>
          );
        })}
      </Container>
    </>
  );
}
