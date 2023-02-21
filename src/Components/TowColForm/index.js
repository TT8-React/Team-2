import React from "react";
import FormBtn from "../FormBtn";

import FormItem from "../FormItem/index";

import { Container, FormElement } from "./style";

const TowColForm = ({ data }) => {
  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log('submit')
  }
  return (
    <FormElement onSubmit={handleSubmit}>
      <Container>
        {data?.map((item) => {
          return (
            <FormItem key={item} name={item} label={item} width={"270px"} />
          );
        })}
      </Container>
      <div style={{ margin: "1rem 33%" }}>
        <FormBtn name="Submit"/>
      </div>
    </FormElement>
  );
};

export default TowColForm;
