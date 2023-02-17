import React from "react";
import Button from "../../Components/Button";
import FormItem from "../../Components/FormItem";
import Layout from "../../Components/Layout";
import { ProfileDetailsData } from "../../MockData/Data";
import { InputGrid, InputsWraper, TopSection } from "./style";
export default function ProfileDetails() {
  return (
    <Layout path="Profile Details">
      <TopSection>
        <Button name={"View details"} />{" "}
      </TopSection>{" "}
      <InputsWraper>
        <InputGrid>
          {" "}
          {ProfileDetailsData.map((item) => {
            return (
              <FormItem
                name={item.name}
                type={"text"}
                label={item.name}
                key={item.id}
              />
            );
          })}{" "}
        </InputGrid>{" "}
      </InputsWraper>{" "}
      <Button name={"Submit"} />{" "}
    </Layout>
  );
}
