import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import WrapperForm from "./../../Components/WrapperForm/index";
import FormTitle from "./../../Components/FormTitle/index";
import FormItem from "./../../Components/FormItem/index";
import TextForm from "./../../Components/TextForm/index";
import FormBtn from "./../../Components/FormBtn/index";
import Error from "../../Components/Error";
import Text from "./Text";

import { FlexCenter } from "./../../global/style";
const Login = () => {
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email")
      .required("Please Enter your email"),
    password: Yup.string().required("Please Enter your password"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("values", values);
    },
  });

  return (
    <WrapperForm>
      <form onSubmit={formik.handleSubmit}>
        <FormTitle title="LOGIN" />
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
        <FormItem
          label="Password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          onBlur={formik.handleBlur}
        />{" "}
        {formik.touched.password && formik.errors.password && (
          <Error msg={formik.errors.password} />
        )}{" "}
        <Text text="Forget password ?" />
        <FlexCenter>
          <FormBtn name="LOGIN" type="submit" />
        </FlexCenter>{" "}
        <TextForm
          text="Don’t have an account ?"
          spanText="Sign up"
          linkTO="/signup"
        />
      </form>{" "}
    </WrapperForm>
  );
};
export default Login;
