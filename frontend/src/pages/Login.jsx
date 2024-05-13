import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setIsLoggedIn } from "../redux/reducers/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { compare } from "bcryptjs";
import { toast } from "react-toastify";

const Login = () => {
  const initialState = {
    email: "",
    password: "",
  };

  const [userFromDb, setUserFromDb] = useState(null);
  const fetchUser = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost/Php-React-Login/backend/fetching.php"
      );

      setUserFromDb(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (userFromDb) {
        const matchedUser = userFromDb.find(
          (user) => user.email === formData.email
        );

        if (matchedUser) {
          const isMatch = await compare(
            formData.password,
            matchedUser.password
          );
          if (isMatch) {
            toast.success("Login successfull");
            setFormData(initialState);
            navigate("/");
            dispatch(setIsLoggedIn(true));
          } else {
            toast.error("Invalid credentials");
          }
        } else {
          toast.error("User not found");
        }
      } else {
        toast.error("User not found");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center pt-10 bg-slate-100 w-full h-screen">
      <h1 className="text-3xl bg-orange-700 p-3 rounded-md text-white">
        Kayıt yaptığınız kullanıcı bilgileriyle sisteme giriş yapabilirsiniz.
      </h1>
      <div className="w-1/4">
        <form
          className="mt-20 flex flex-col gap-5 border-2 border-indigo-700 p-10 rounded-md"
          onSubmit={handleSubmit}
        >
          <h1 className="bg-indigo-700 w-full p-2 text-center text-white">
            Login
          </h1>

          <input
            value={formData.email}
            name="email"
            type="email"
            placeholder="Email"
            className="input-style"
            onChange={handleChange}
          />
          <input
            value={formData.password}
            type="password"
            name="password"
            placeholder="Şifre"
            className="input-style"
            onChange={handleChange}
          />

          <div className="flex gap-5 items-center">
            <button className="button-style" type="submit">
              Login
            </button>
            <Link to="/register" className="text-sm text-red-600">
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
