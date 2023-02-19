import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

import WrapperForm from "./../../Components/WrapperForm/index";
import FormTitle from "./../../Components/FormTitle/index";
import FormItem from "./../../Components/FormItem/index";
import TextForm from "./../../Components/TextForm/index";
import FormBtn from "./../../Components/FormBtn/index";
import Error from "../../Components/Error";
import Text from "./Text";

import { FlexCenter } from "./../../global/style";
import { API_URL } from "./../../config/api";
import { PATHS } from "../../Routes";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { loading, setLoading, setToken, login } = useAuth();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email")
      .required("Please Enter your email"),
    password: Yup.string().required("Please Enter your password"),
  });

  const onSubmit = async ({ email, password }) => {
    setLoading(true);
    try {
      const res = await axios.post(`${API_URL}/users/login`, {
        email,
        password,
      });

      if (res) {
        console.log("you are logged in successfully");
        setToken(res.data.token);
        localStorage.setItem("token", res.data.token);
        login();
      }
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoading(false);
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
        />
        {formik.touched.email && formik.errors.email && (
          <Error msg={formik.errors.email} />
        )}
        <FormItem
          label="Password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password && (
          <Error msg={formik.errors.password} />
        )}
        <Text text="Forget password ?" />
        <FlexCenter>
          <FormBtn name={loading ? "Loading...." : "LOGIN"} type="submit" />
        </FlexCenter>
        <TextForm
          text="Don’t have an account ?"
          spanText="Sign up"
          linkTo={PATHS.SIGNUP}
        />
      </form>
    </WrapperForm>
  );
};

export default Login;
