import { lazy } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Customize from "../Pages/Reports/Customize";
import DataUpload from "../Pages/DataUpload/Upload";
import Gri from "../Pages/Reports/Gri";
import Sebi from "../Pages/Reports/Sebi";
import Navbar from "../Components/Navbar/Navbar";
import SideBar from "../Components/SideBar/SideBar";
import { Main } from "../Components/Upload/style";
import Manual from "../Pages/DataUpload/Manual";
import Environment from "../Pages/Analytic/Environment";
import Governance from "../Pages/Analytic/Governance";
import Social from "../Pages/Analytic/Social";
import CompanyDetails from "../Pages/CompanyDetails/";
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
  COMPANYDETAILS: "/companydetails",
  PROFILEDETAILS: "/profile",
  MYREPORT: "/myReport",
  REPORT: "/report",
  SEBI: "/sebi",
  GRI: "/gri",
  CUSTOMIZE: "/customize",
  MANUAL: "/manual",
  UPLOAD: "/dataUpload",
  ENVIRONMENT: "/environment",
  GOVERNANCE: "/governance",
  SOCIAL: "/social",
};

export function NotAuthorized() {
  return (
    <Routes>
      <Route index path={PATHS.LOGIN} element={<Login />} />
      <Route path={PATHS.SIGNUP} element={<Signup />} />
      <Route path={PATHS.FORGETPASSWORD} element={<ForgetPassword />} />
      <Route path="*" element={<Navigate to={PATHS.LOGIN} />} />
    </Routes>
  );
}

export function Authorized() {
  const { pathname } = useLocation();

  const getPageName = (pathname) => {
    const str = pathname.substr(1);
    return str
      .split(/(?=[A-Z])/)
      .join(" ")
      .toUpperCase();
  };
  return (
    <>
      <Navbar path={getPageName(pathname)} />
      <SideBar />
      <Main>
        <Routes>
          <Route index path={PATHS.DASHBOARD} element={<Dashboard />} />
          <Route
            index
            path={PATHS.COMPANYDETAILS}
            element={<CompanyDetails />}
          />

          <Route path={PATHS.PROFILEDETAILS} element={<ProfileDetails />} />
          <Route path={PATHS.MYREPORT} element={<MyReport />} />
          <Route path={PATHS.REPORT} element={<Report />} />
          <Route path={PATHS.CUSTOMIZE} element={<Customize />} />
          <Route path={PATHS.SEBI} element={<Sebi />} />
          <Route path={PATHS.GRI} element={<Gri />} />
          <Route path={PATHS.MANUAL} element={<Manual />} />
          <Route path={PATHS.UPLOAD} element={<DataUpload />} />
          <Route path={PATHS.SOCIAL} element={<Social />} />
          <Route path={PATHS.ENVIRONMENT} element={<Environment />} />
          <Route path={PATHS.GOVERNANCE} element={<Governance />} />
          <Route path="*" element={<Navigate to={PATHS.DASHBOARD} />} />
        </Routes>
      </Main>
    </>
  );
}
