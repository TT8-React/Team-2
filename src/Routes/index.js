import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

// pages
const Signup = lazy(() => import("../Pages/Signup"));
const Login = lazy(() => import("../Pages/Login"));
const Dashboard = lazy(() => import("../Pages/Dashboard"));
const ForgetPassword = lazy(() => import("../Pages/ForgetPassword"));

export const PATHS = {
  SIGNUP: "/signup",
  LOGIN: "/login",
  FORGETPASSWORD: "/forgetPassword",
};

export function NotAuthorized() {
  return (
    <>
      <Routes>
        <Route index element={<Login />} />
        <Route path={PATHS.SIGNUP} element={<Signup />} />
        <Route path={PATHS.FORGETPASSWORD} element={<ForgetPassword />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export function Authorized() {
  return (
    <>
      <Routes>
        <Route index element={<Dashboard />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}
