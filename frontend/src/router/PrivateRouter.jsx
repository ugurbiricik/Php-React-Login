import React, { Children } from "react";
import { Navigate, useLocation } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import { useSelector } from "react-redux";

const PrivateRouter = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const location = useLocation();

  return isLoggedIn ? (
    <MainLayout>{Children}</MainLayout>
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

export default PrivateRouter;
