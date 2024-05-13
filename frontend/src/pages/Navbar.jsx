import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
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
    </div>
  );
};

export default Navbar;
