import { Navigate, Outlet } from "react-router-dom";
import { PATHS } from "../../Routes";
import { useAuthContext } from "../../Context/AuthContext";
import { useLocation } from "react-router-dom";
import Layout from "../Layout/index";
const ProtectedRoute = () => {
  const { pathname } = useLocation();

  const getPageName = (pathname) => {
    let str = pathname;
    return str.split("/").length < 3 ? str.split("/")[1] : str.split("/")[2];
  };
  const { authorized } = useAuthContext();
  return (
    <div>
      {authorized ? (
        <>
          <Layout path={getPageName(pathname)}>
            <Outlet />
          </Layout>
        </>
      ) : (
        <Navigate to={PATHS.LOGIN} />
      )}
    </div>
  );
};
export default ProtectedRoute;
