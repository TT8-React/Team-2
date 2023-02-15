import React from "react";
import FormBtn from "../FormBtn";

import FormItem from "../FormItem/index";

import { Container, Form } from "./style";

const TowColForm = ({ data }) => {
  return (
    <Form>
      <Container>
        {data?.map((item) => {
          return <FormItem key={item} name={item} label={item} />;
        })}
      </Container>
      <FormBtn name="Submit" />
    </Form>
  );
};

export default TowColForm;
