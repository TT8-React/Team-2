import React from "react";

//library
import { useFormik } from "formik";
import * as Yup from "yup";

//components
import WrapperForm from "./../../Components/WrapperForm/index";
import FormTitle from "./../../Components/FormTitle/index";
import FormItem from "./../../Components/FormItem/index";
import FormBtn from "./../../Components/FormBtn/index";
import { FlexCenter } from "../../global/style";
import Error from "./../../Components/Error/index";

const ForgetPassword = () => {
  //validation
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email")
      .required("Please Enter your email"),
  });

  const initialValues = {
    email: "",
  };

  const onSubmit = () => {
    console.log("submit");
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <WrapperForm>
      <form onSubmit={formik.handleSubmit}>
        <FormTitle title="FORGOT PASSWORD" />
        <FormItem
          label="Email ID"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
        />{" "}
        {formik.touched.email && formik.errors.email && (
          <Error msg={formik.errors.email} />
        )}{" "}
        <FlexCenter>
          <FormBtn name="SUBMIT" type="submit" />
        </FlexCenter>{" "}
      </form>{" "}
    </WrapperForm>
  );
};

export default ForgetPassword;
