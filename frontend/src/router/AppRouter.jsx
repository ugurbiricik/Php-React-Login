import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Users from "../pages/Users";
import AuthRouter from "./AuthRouter";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import Login from "../pages/Login";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* AuthRouter içindeki rotalar */}
        <Route element={<AuthRouter />}>
          <Route path="/register" index element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>

        {/* PrivateRouter içindeki rotalar */}
        <Route element={<PrivateRouter />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="users" element={<Users />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
