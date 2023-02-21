import { Navigate, Outlet } from "react-router-dom";
import { PATHS } from "../../Routes";
import { useAuthContext } from "../../Context/AuthContext";
import { useLocation } from "react-router-dom";
import Layout from "../Layout/index";
import { Suspense } from "react";
import Spinner from "../Spinner";
const ProtectedRoute = () => {
  const { pathname } = useLocation();

  const getPageName = (pathname) => {
    let str = pathname.split("/");
    str=str.length<3?str[1]:str[2];
    str=str==='manual'?'dataUplaod':str;
    return str.split(/(?=[A-Z])/).join(" ")
  };
  const { authorized } = useAuthContext();
  return (
    <div>
      {authorized ? (
        <>
          <Layout path={getPageName(pathname)}>
          <Suspense fallback={<Spinner />}>
            <Outlet />
            </Suspense>
          </Layout>
        </>
      ) : (
        <Navigate to={PATHS.LOGIN} />
      )}
    </div>
  );
};
export default ProtectedRoute;
