import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { toast } from 'react-hot-toast';
import { useSelector } from "react-redux";
function Navbar() {
  const {cart}=useSelector((state)=>state);
  return (
    <div className="w-screen ">
       
       {/* {toast.success("hello ji")} */}
      <div className=" pt-4 pb-4 flex flex-row pl-[50px] justify-between   bg-black pr-12 w-full ">
      <NavLink to="/">
        <div className="ml-5">
          <img src="logo.png" width="200px" alt="" />
        </div>
      </NavLink>
        
        <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
          
          <NavLink to="/">
          <p className="text-white">Home</p>
          </NavLink>
          <NavLink to="/cart">
            <div className="relative">
              <FaShoppingCart className="text-white text-2xl"/>
              {
                cart.length>0&&<span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">{cart.length}</span>
              }
              
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
