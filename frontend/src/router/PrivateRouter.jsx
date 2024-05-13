import React from "react";
import { Outlet } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

const PrivateRouter = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};

export default PrivateRouter;
