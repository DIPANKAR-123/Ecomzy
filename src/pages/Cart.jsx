import React, { useState,useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem'
function Cart() {
    const {cart}=useSelector((state)=>state);
    const [totalAmount,setTotalAmout]=useState(0);

    useEffect(()=>{
   setTotalAmout(cart.reduce((acc,curr)=>acc+curr.price,0));
    },[cart])
  return (
    <div className="flex justify-center ml-8 mt-8 lg:ml-72 gap-10 items-center  max-w-[300px] ">
    {cart.length > 0 ? (
      <div className="flex  justify-center items-center gap-4 lg:flex-row flex-col">
        <div>
          {cart.map((item, index) => {
            return (
              <div className=" flex  w-[350px] md:w-full flex-col gap-2">
                <CartItem key={item.id} item={item} itemIndex={index} />
              </div>
            );
          })}
        </div>
        
        <div className="flex md:absolute    mr-1 max-h-[200px]
         flex-col right-72 justify-between    lg:ml-96 h-[500px]   ">
          <div>
            <div className="text-green-600">Your Cart</div>
            <div className="text-green-600 font-bold text-[40px]">
              Summary
            </div>
            <p>
              <span className="font-semibold">
                Total Items :{cart.length}
              </span>
            </p>
          </div>
          <div>
            <p>
              Total Amount : ${totalAmount}
              <p />
            </p>
            <button className="bg-green-600 px-6 py-2 mt-4">
              Checkout Now
            </button>
          </div>
        </div>
        </div>

       
      
    ) : (
      <div className="flex justify-center mx-auto  items-center w-screen h-screen  ">
        <div className=" flex flex-col gap-6 ">
          <h1 className="flex justify-center items-center">
            Your Cart is Empty
          </h1>
          <Link to={"/"}>
            <button className="px-8 text-white py-2 bg-green-600">
              Shop Now
            </button>
          </Link>
        </div>
      </div>
    )}
  </div>
  )
}

export default Cart