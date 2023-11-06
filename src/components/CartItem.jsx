import React from 'react'
import { MdDeleteForever } from "react-icons/md";

import { useDispatch } from 'react-redux'
import {remove} from '../redux/slices/CartSlice.jsx'
import {toast} from 'react-hot-toast';
function CartItem({item,itemIndex}) {
    const dispatch=useDispatch();
    const removeFromCart = ()=>{
           dispatch(remove(item.id));
           toast.success("Removed succesfully");
    }
  return (
    <div className="flex flex-col  md:w-[450px] mt-6  justify-center items-center  h-[230px] rounded-[30px] shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] ">
    <div className=" ml-6 flex gap-8 mt-8 h-[3000px] w-[290px] md:w-full  ">
      <div className="">
        <img src={item.image}  className=" mt-4 h-[120px] w-[170px] " />
      </div>
      <div className="h-[150px] ">
        <h1 className="text-gray-700 font-semibold text-lg text-left truncate w-16 mt-1">
          {item.title}
        </h1>
        <h1 className="w-20 text-gray-500 font-normal text-[12px] text-left">
          {item.description.split(" ").slice(0, 10).join(" ") + "..."}
        </h1>
        <div className="flex justify-between mt-4">
          <p className="text-green-600 font-semibold">${item.price}</p>
          <div className='mt-1' onClick={removeFromCart}>
            <MdDeleteForever />
          </div>
        </div>
      </div>
        
    </div>
  
   
  </div>
  )
}

export default CartItem