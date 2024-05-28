import React, { useState } from "react";
import '../../../index.css'

const SpareCard = ({product}) => {

  const text = product.spec;
  const show = text.length > 18;

  return (
    <div className=" mx-8 my-4 sm:mx-4  flex flex-col items-center justify-between bg-white hover:scale-110 transition-all duration-300  ease-in p-4 mt-10  rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[0px_0px_95px_53px_#00000024] ">
      <div>
        <h1 className="text-gray-700 font-semibold text-2xl text-center  mt-1 w-40">
          {product.title}
        </h1>
      </div>

      <div className="h-[180px]">
        <img
          src={product.imageUrl}
          alt="Product Image"
          className="h-full w-[230px]"
        />
      </div>

      <div className=" w-3/4 mt-5 text-left" >
        <p className="text-gray-700 font-semibold text-1xl w-full ">
          <span className="font-bold" >Specs</span> - {text}
        </p>

       {/* {show && <p className="text-gray-700 font-semibold text-1xl  truncate  ">
          {text.slice(18, 36)}
        </p>}
      
       {show && <p className="text-gray-700 font-semibold text-1xl  truncate  ">
          {text.slice(36)}
        </p>} */}



        <h1 className="text-gray-700 font-semibold text-1xl  truncate  w-full">
          <span className="font-bold" >Quantity</span> - {product.quantity}
        </h1>
        <p>
        <span className="text-gray-700 font-bold">Price</span> : <span className="text-green-600 font-semibold"> ₹{product.startPrice} - ₹{product.endPrice}</span>
        </p>
      </div>
    </div>
  );
};

export default SpareCard;
