import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const Layout = ({ cartLen }) => {
  return (
    <>
      <nav className="w-full h-20 bg-lime-500 flex items-center justify-between px-4 md:px-28 font-bold">
        <div className="font-black text-3xl md:text-5xl">
          <NavLink to="/" className="text-white hover:text-gray-300">
            Shop it
          </NavLink>
        </div>

        <ul className="flex gap-4 md:gap-8">
          <li>
            <NavLink to="/home" className="text-white hover:text-gray-300">
              Home
            </NavLink> 
          </li>
          <li>
            <NavLink to="/search" className="text-white hover:text-gray-300">
              Search
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" className="text-white hover:text-gray-300">
              Cart <sup>{cartLen}</sup>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="text-white hover:text-gray-300">
              Contact
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/login" className="text-white hover:text-gray-300">
              Login
            </NavLink>
          </li> */}
        </ul>
      </nav>

      <div className="bg-black w-full min-h-screen">
        <div className="bg-white w-full h-auto p-4 md:p-0">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
