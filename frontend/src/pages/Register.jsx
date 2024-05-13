import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setIsRegistered } from "../redux/reducers/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost/Php-React-Login/backend/fetching.php",
        formData
      );
      setFormData(initialState);
      dispatch(setIsRegistered(true));
      navigate("/login");
      toast.success("Register successfull");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center pt-10 bg-slate-100 w-full h-screen">
      <h1 className="text-3xl bg-orange-700 p-3 rounded-md text-white">
        Giris yapabilmeniz icin öncelikle kayit olmaniz gerekmektedir.
      </h1>
      <div className="w-1/4">
        <form
          className="mt-20 flex flex-col gap-5 border-2 border-indigo-700 p-10 rounded-md"
          onSubmit={handleSubmit}
        >
          <h1 className="bg-indigo-700 w-full p-2 text-center text-white">
            Register
          </h1>
          <input
            value={formData.name}
            name="name"
            type="text"
            placeholder="name"
            className="input-style"
            onChange={handleChange}
          />
          <input
            value={formData.email}
            name="email"
            type="email"
            placeholder="email"
            className="input-style"
            onChange={handleChange}
          />
          <input
            value={formData.password}
            type="password"
            name="password"
            placeholder="password"
            className="input-style"
            onChange={handleChange}
          />

          <div className="flex gap-5 items-center">
            <button className="button-style" type="submit">
              Register
            </button>
            <Link to="/login" className="text-sm text-red-600">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
