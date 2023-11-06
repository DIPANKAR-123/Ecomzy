import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {add,remove} from '../redux/slices/CartSlice'
import {toast} from 'react-hot-toast';
function Product({post}) {
    const [selected,setSelected]=useState(1);
    const {cart}=useSelector((state)=>state);
    const dispatch=useDispatch();
    const addToCart=()=>{
      console.log("error herr");
      toast.success("Item added to cart");
      setSelected(!selected);
      dispatch(add(post));
      console.log("error here2")
    }
    const removeFromCart=()=>{
        setSelected(!selected);
        toast.error("Item removed from cart")
        dispatch(remove(post.id));


    }
  return (
    <div className='flex flex-col items-center justify-between hover:scale-110 transition duration-300 ease in gap-3 p-4 mt-10 ml-5 rounded-xl  shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]'>
        
        <div>
            <p className='text-gray-700 font-semibold text-lg text-left truncate-40'>{post.title}</p>
        </div>
        <div>
            <p className='w-40 text-gray-400 font-normal text-[10px] text-left'>{post.description.split(" ").slice(0,10).join(" ")+"..."}</p>
        </div>
        <div className='h-[180px]'>
            <img src={post.image} className='h-full w-full' alt="" />
        </div>
        <div className='flex justify-between gap-12 items-center w-full mt-5'>

        
        <div>
            <p className='text-green-600 font-semibold gap-12 items-center p-1 px-3 w-full '>${post.price}</p>
        </div>
        <button>
            {
                cart.some((p)=>p.id==post.id)?(<button className='hover:bg-gray-700 hover:text-white text-gray-700 border-2 border-gray-700 rounded full font-semibold text-[12px] p-1 px-2 uppercase transition duration-300 ease in '  onClick={removeFromCart}>Remove Item</button>):(<button className='hover:bg-gray-700 hover:text-white text-gray-700 border-2 border-gray-700 rounded full font-semibold text-[12px] p-1 px-2 uppercase transition duration-300 ease in ' onClick={addToCart}>Add to Cart</button>)
            }
        </button>
        </div>
    </div>
  )
}

export default Product