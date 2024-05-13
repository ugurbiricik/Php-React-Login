import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const AuthRouter = () => {
  const { token } = useSelector((state) => state.auth);
  const location = useLocation();

  return token ? <Navigate to="/" state={{ from: location }} /> : <Outlet />;
};

export default AuthRouter;
