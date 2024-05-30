import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../../index.css";

const HomeSectionCard = ({ product }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  const [checkProduct, setCheckProduct] = useState();
  // console.log("Product Info - ", product);

  return (
    <div className="flex flex-col">
      <div
        className={`flex flex-col  items-center justify-center rounded-lg overflow-hidden 
       mx-3    ${pathname === "/product" ? "" : " card shadow-lg"}`}
      >
        {/* h-[23rem] w-[23rem] */}
        <div className="flex justify-center items-center">
          {/* object-top object-cover */}
          <img
            className={` ${
              pathname === "/product" ? " h-[15rem] sm:h-[25rem] lg:h-[30rem] " : "h-[15rem] sm:h-[20rem]"
            } ` }
            src={product.imageUrl}
            alt=""
          />
        </div>

        {pathname === "/" && (
          <div className="w-full flex flex-col items-center justify-center">

            <p className="text-2xl font-bold">{product.name}</p>

            <button
              onClick={() => {
                // console.log("Product Name - ", product.name);
                
                localStorage.setItem("checkProduct", product.name);
                // console.log("LocalStorage Item Set  -- ", localStorage.getItem("checkProduct"));
                navigate("/product");
              }}
              className="py-2.5 px-5 bg-blue-600  text-white rounded-full m-4 hover:underline hover:bg-blue-800 "
            >
              Know More
            </button>
          </div>
        )}

      </div>
    </div> // w-[30rem]
  );
};

export default HomeSectionCard;
