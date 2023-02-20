import { lazy } from "react";
import { Navigate } from "react-router-dom";

// Auth pages
const LoginAuth = lazy(() =>
  import("./../Components/AuthonticationSection/LogInAuth")
);
const SignUpAuth = lazy(() =>
  import("./../Components/AuthonticationSection/SignUpAuth")
);
const Verified = lazy(() => import("./../Pages/Verified/index"));
const Verification = lazy(() => import("./../Pages/Verification/index"));
const ProtectedRoute = lazy(() => import("../Components/ProtectedRoute"));

// App pages
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
//  router
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
  { path: "*", element: <h1>Page not found</h1> },
];
// export function NotAuthorized() {
//   return (
//     <Routes>
//       <Route index path={PATHS.LOGIN} element={<Login />} />
//       <Route path={PATHS.SIGNUP} element={<Signup />} />
//       <Route path={PATHS.FORGETPASSWORD} element={<ForgetPassword />} />
//       <Route path="*" element={<Navigate to={PATHS.LOGIN} />} />
//     </Routes>
//   );
// }

// export function Authorized() {
//   const { pathname } = useLocation();

//   const getPageName = (pathname) => {
//     let str = pathname.substr(1);
//     str = str === "manual" ? "dataUpload" : str;
//     return str.split(/(?=[A-Z])/).join(" ");
//   };
//   return (
//     <>
//       <Navbar path={getPageName(pathname)} />
//       <SideBar />
//       <Main>
//         <Routes>
//           <Route index path={PATHS.DASHBOARD} element={<Dashboard />} />
//           <Route path={PATHS.COMPANYDETAILS} element={<CompanyDetails />} />
//           <Route path={PATHS.PROFILEDETAILS} element={<ProfileDetails />} />
//           <Route path={PATHS.MYREPORT} element={<MyReport />} />
//           <Route path={PATHS.REPORT} element={<Report />} />
//           <Route path={PATHS.CUSTOMIZE} element={<Customize />} />
//           <Route path={PATHS.SEBI} element={<Sebi />} />
//           <Route path={PATHS.GRI} element={<Gri />} />
//           <Route path={PATHS.MANUAL} element={<Manual />} />
//           <Route path={PATHS.UPLOAD} element={<DataUpload />} />
//           <Route path={PATHS.SOCIAL} element={<Social />} />
//           <Route path={PATHS.ENVIRONMENT} element={<Environment />} />
//           <Route path={PATHS.GOVERNANCE} element={<Governance />} />
//           <Route path="*" element={<Navigate to={PATHS.DASHBOARD} />} />
//         </Routes>
//       </Main>
//     </>
//   );
// }
