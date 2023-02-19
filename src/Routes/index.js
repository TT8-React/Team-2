import Verified from "./../Pages/Verified/index";
import Verification from "./../Pages/Verification/index";
import ProtectedRoute from "../Components/ProtectedRoute";

import { lazy } from "react";
import { Navigate } from "react-router-dom";

// pages
const LoginAuth = lazy(() =>
  import("./../Components/AuthonticationSection/LogInAuth")
);
const SignUpAuth = lazy(() =>
  import("./../Components/AuthonticationSection/SignUpAuth")
);
const Dashboard = lazy(() => import("../Pages/Dashboard"));
const ForgetPassword = lazy(() => import("../Pages/ForgetPassword"));
const MyReport = lazy(() => import("../Pages/Reports/MyReport"));
const ProfileDetails = lazy(() => import("../Pages/ProfileDetails"));
const Report = lazy(() => import("../Pages/Reports/Report/Report"));
const CompanyDetails = lazy(() => import("../Pages/CompanyDetails"));
const Social = lazy(() => import("../Pages/Analytic/Social"));
const Governance = lazy(() => import("../Pages/Analytic/Governance"));
const Environment = lazy(() => import("../Pages/Analytic/Environment"));
const Manual = lazy(() => import("../Pages/DataUpload/Manual"));
const Sebi = lazy(() => import("../Pages/Reports/Sebi"));
const Gri = lazy(() => import("../Pages/Reports/Gri"));
const DataUpload = lazy(() => import("../Pages/DataUpload/Upload"));
const Customize = lazy(() => import("../Pages/Reports/Customize"));



//  paths
export const PATHS = {
  SIGNUP: "/signup",
  LOGIN: "/login",
  FORGET_PASSWORD: "/forgetPassword",
  DASHBOARD: "/dashboard",
  COMPANY_DETAILS: "companyDetails",
  PROFILE_DETAILS: "profile",
  MY_REPORT: "myReport",
  REPORT: "report",
  SEBI: "sebi",
  GRI: "gri",
  CUSTOMIZE: "customize",
  MANUAL: "manual",
  UPLOAD: "dataUpload",
  ENVIRONMENT: "environment",
  GOVERNANCE: "governance",
  SOCIAL: "social",
  VERIFICATION: "/verification",
  VERIFY: "/verify",
};


export const router = [
  { index: "true", element: <Navigate to={PATHS.LOGIN} /> },
  { path: PATHS.LOGIN, element: <LoginAuth /> },
  { path: PATHS.SIGNUP, element: <SignUpAuth /> },
  { path: PATHS.FORGET_PASSWORD, element: <ForgetPassword /> },
  { path: PATHS.VERIFY, element: <Verified /> },
  { path: PATHS.VERIFICATION, element: <Verification /> },
  {
    path: PATHS.DASHBOARD,
    element: <ProtectedRoute />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: PATHS.COMPANY_DETAILS, element: <CompanyDetails /> },
      { path: PATHS.PROFILE_DETAILS, element: <ProfileDetails /> },
      { index: true, path: PATHS.MY_REPORT, element: <MyReport /> },
      { path: PATHS.SOCIAL, element: <Social /> },
      { path: PATHS.ENVIRONMENT, element: <Environment /> },
      { path: PATHS.GOVERNANCE, element: <Governance /> },
      { path: PATHS.MANUAL, element: <Manual /> },
      { path: PATHS.UPLOAD, element: <DataUpload /> },
      { path: PATHS.SEBI, element: <Sebi /> },
      { path: PATHS.GRI, element: <Gri /> },
      { path: PATHS.CUSTOMIZE, element: <Customize /> },
      { path: PATHS.REPORT, element: <Report /> },
    ],
  },
];
