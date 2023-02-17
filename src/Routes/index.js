import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Customize from "../Pages/Customize";
import DataUpload from "../Pages/DataUpload";
import Gri from "../Pages/Reports/Gri";
import Sebi from "../Pages/Reports/Sebi";

// pages
const Signup = lazy(() => import("../Pages/Signup"));
const Login = lazy(() => import("../Pages/Login"));
const Dashboard = lazy(() => import("../Pages/Dashboard"));
const ForgetPassword = lazy(() => import("../Pages/ForgetPassword"));
const MyReport = lazy(() => import("../Pages/Reports/MyReport"));
const ProfileDetails = lazy(() => import("../Pages/ProfileDetails"));
const Report = lazy(() => import("../Pages/Reports/Report/Report"));

//  paths
export const PATHS = {
  SIGNUP: "/signup",
  LOGIN: "/login",
  FORGETPASSWORD: "/forgetPassword",
  DASHBOARD: "/dashboard",
  PROFILEDETAILS: "/profile",
  MYREPORT: "/myreport",
  REPORT: "/report",
  SEBI: "/sebi",
  GRI: "/gri",
  CUSTOMIZE: "/customize",
  DATAUPLOAD: "/dataupload",
};

export function NotAuthorized() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path={PATHS.LOGIN} element={<Login />} />
        <Route path={PATHS.SIGNUP} element={<Signup />} />
        <Route path={PATHS.FORGETPASSWORD} element={<ForgetPassword />} />
        <Route path="*" element={<Navigate to={PATHS.LOGIN} />} />
      </Routes>
    </Suspense>
  );
}

export function Authorized() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path={PATHS.DASHBOARD} element={<Dashboard />} />
        <Route path={PATHS.PROFILEDETAILS} element={<ProfileDetails />} />
        <Route path={PATHS.MYREPORT} element={<MyReport />} />
        <Route path={PATHS.REPORT} element={<Report />} />
        <Route path={PATHS.CUSTOMIZE} element={<Customize />} />
        <Route path={PATHS.SEBI} element={<Sebi />} />
        <Route path={PATHS.GRI} element={<Gri />} />
        <Route path={PATHS.DATAUPLOAD} element={<DataUpload />} />
        <Route path="*" element={<Navigate to={PATHS.DASHBOARD} />} />
      </Routes>
    </Suspense>
  );
}
