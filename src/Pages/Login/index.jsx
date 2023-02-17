import React, { useState } from "react";
// libraries
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
//  components
import WrapperForm from "./../../Components/WrapperForm/index";
import FormTitle from "./../../Components/FormTitle/index";
import FormItem from "./../../Components/FormItem/index";
import TextForm from "./../../Components/TextForm/index";
import FormBtn from "./../../Components/FormBtn/index";
import Error from "../../Components/ErrorBoundary";
import Text from "./Text";
import { FlexCenter } from "./../../global/style";
//  API
import { API_URL } from "./../../config/api";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email")
      .required("Please Enter your email"),
    password: Yup.string().required("Please Enter your password"),
  });

  const onSubmit = async ({ email, password }) => {
    setLoading(true);
    const res = await axios
      .post(`${API_URL}/users/login`, { email, password })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => setLoading(false));

    if (res) {
      console.log("you are logged in successfully");
      navigate("/dashboard");
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit,
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
          <FormBtn name={loading ? "Loading...." : "LOGIN"} type="submit" />
        </FlexCenter>{" "}
        <TextForm
          text="Don’t have an account ?"
          spanText="Sign up"
          linkTo="/signup"
        />
      </form>{" "}
    </WrapperForm>
  );
};

export default Login;
