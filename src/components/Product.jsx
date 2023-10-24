import React, { useState } from 'react'
function Product({post}) {
    const [selected,setSelected]=useState(1);
  return (
    <div>
        <div>

            <p>{post.title}</p>
        
        </div>
        <div>
            <p>{post.desccription}</p>
        </div>
        <div>
            <img src={post.image} alt="" />
        </div>
        <div>
            <p>{post.price}</p>
        </div>
        <button>
            {
                selected?<p>Remove Item</p>:<p>Add ti Cart</p>
            }
        </button>

    </div>
  )
}

export default Product