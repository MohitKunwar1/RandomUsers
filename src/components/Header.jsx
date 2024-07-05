import React from "react";
import { Link } from "react-router-dom";
import ThemeButton from "./ThemeButton.jsx";

const Header = () => {
  return (
    <>
      <div className="w-full h-24 bg-sky-900 text-white flex items-center justify-between">
        <h1 className="text-4xl font-bold pl-32">Random Users</h1>
        <ul className="flex gap-20 pr-20 text-xl font-semibold">
          <li className="hover:underline hover:text-sky-300 duration-200">
            <Link to='/'>Home</Link>
          </li>
          <li className="hover:underline hover:text-sky-300 duration-200">
            <Link to='/about'>About</Link>
          </li>
          <li className="hover:underline hover:text-sky-300 duration-200">
            <Link to='/contact'>Contact us</Link>
          </li>
          <ThemeButton/>
        </ul>
      </div>
    </>
  );
};

export default Header;
