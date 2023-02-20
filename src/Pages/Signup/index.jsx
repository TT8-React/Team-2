import React from "react";

//libraries
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

//components
import WrapperForm from "./../../Components/WrapperForm/index";
import FormTitle from "./../../Components/FormTitle/index";
import FormItem from "./../../Components/FormItem/index";
import TextForm from "./../../Components/TextForm/index";
import FormBtn from "./../../Components/FormBtn/index";
import { FlexCenter } from "../../global/style";
import Error from "../../Components/ErrorBoundary";

//  API
import { API_URL } from "./../../config/api";
import useAuth from "../../hooks/useAuth";

const Signup = () => {
  const { isLoading, setIsLoading, setToken, login } = useAuth();

  //validation Schema
  const validationSchema = Yup.object({
    name: Yup.string().required("Please Enter your name"),

    email: Yup.string()
      .email("Invalid email")
      .required("Please Enter your email"),

    password: Yup.string()
      .min(8, "password must be more than 8")
      .matches(/[a-z]/g, "password must contain at least one character ")
      .matches(/\d/g, "password must contain at least one digits")
      .matches(
        /[!@#$%^&*)(+=._-]/g,
        "password must contain at least one special character"
      )
      .required("Please enter your password"),
  });

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const onSubmit = async ({ name, email, password }) => {
    try {
      setIsLoading(true);
      const res = await axios.post(`${API_URL}/users/signup`, {
        email,
        password,
        name,
      });
      console.log("you are logged in successfully");
      setToken(res.data.token);
      localStorage.setItem("token", res.data.token);
      login();
    } catch (err) {
      console.log(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <>
      <WrapperForm>
        <form onSubmit={formik.handleSubmit} autoComplete="off">
          <FormTitle title="SIGN UP" />
          <FormItem
            label="Name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
          />{" "}
          {formik.touched.name && formik.errors.name && (
            <Error msg={formik.errors.name} />
          )}{" "}
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
          <FlexCenter>
            <FormBtn
              name={isLoading ? "Loading..." : "Sign up"}
              type="submit"
            />
          </FlexCenter>{" "}
          <TextForm
            text="Already have an account ?"
            spanText="Login"
            linkTo={"/login"}
          />{" "}
        </form>{" "}
      </WrapperForm>{" "}
    </>
  );
};

export default Signup;
