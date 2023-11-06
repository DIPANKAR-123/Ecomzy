import React, { useState,useEffect } from 'react'
import Product from "../components/Product"
import Spinner from "../components/Spinner"

function Home() {
    const api_url="https://fakestoreapi.com/products";
    const [loading,setLoading] = useState(false);
    const [posts,setPosts]=useState([]);
   async function fetchProductData(){
    setLoading(true);
    try{
            const res=await fetch(api_url);
            const data=await res.json();
            setPosts(data);
            // console.log(data)
            // console.log("hello1");
            // console.log(posts)
            // console.log("hello2");
    }
    catch(err){
      console.log("error")
      setPosts([]);
    }
    setLoading(false);

   }
   useEffect(() =>{
    fetchProductData();
   },[]);
  return (
    <div>
      {
        loading?<Spinner></Spinner>:posts.length>0?(
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh] '>
            {
            posts.map((post)=>  {
              return <Product key={post.id} post={post}></Product>
          })
          }
          </div>
        ):
        <div className='flex justify-center items-center'>
          <p>No Data Found</p>
        </div>
      }
    </div>
  )
}

export default Home