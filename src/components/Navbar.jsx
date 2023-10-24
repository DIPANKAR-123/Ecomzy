import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <div className=" pt-4 pb-4 flex flex-row pl-[50px] justify-between mx-auto  bg-black pr-12 ">
      <NavLink to="/">
        <div>
          <img src="logo.png" width="200px" alt="" />
        </div>
      </NavLink>
        
        <div>
          <NavLink to="/">
          <p className="text-white">Home</p>
          </NavLink>
          <NavLink to="/cart">
            <div>
              <FaShoppingCart className="text-white"/>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
