import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout, setIsLoggedIn } from "../redux/reducers/authSlice";
import { toast } from "react-toastify";

const Navbar = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/login");
    dispatch(logout());
    dispatch(setIsLoggedIn(false));
    toast.success("Logout successfull");
  };

  console.log(isLoggedIn);
  return (
    <div className="h-20 bg-indigo-500 text-white flex items-center justify-between px-5">
      <div className="text-3xl">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Q4c5rIzjB6tyvzvQ0gmU6xHIBc84RYIRog&usqp=CAU"
          alt="logo"
          className="h-14 w-14 bg-indigo-500 rounded-full"
        />
      </div>
      <ul className="flex gap-10 items-center">
        <li className="text-2xl p-2 hover:bg-indigo-700 hover:rounded-md">
          <Link to="/">Home</Link>
        </li>
        <li className="text-2xl p-2 hover:bg-indigo-700 hover:rounded-md">
          <Link to="/about">About</Link>
        </li>
        <li className="text-2xl p-2 hover:bg-indigo-700 hover:rounded-md">
          <Link to="/contact">Contact</Link>
        </li>

        <li className="text-2xl p-2 hover:bg-indigo-700 hover:rounded-md">
          <Link to="/users">Users</Link>
        </li>
      </ul>

      <div>
        <button
          className="border-2 border-indigo-800 p-2 rounded-xl hover:bg-slate-50 hover:text-indigo-950"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
