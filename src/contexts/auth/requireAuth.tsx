import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const accessToken = Cookies.get("accessToken");

  return accessToken ? <>{children}</> : <Navigate to="/" replace={true} />;
};

export default RequireAuth;
