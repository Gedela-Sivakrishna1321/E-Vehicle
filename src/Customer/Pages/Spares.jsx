import React from "react";
import SpareCard from "../Components/SpareCard/SpareCard";
import { SpareParts } from "../../Data/SpareParts";
import ReachUs from "../Components/ReachUs/ReachUs";

const Spares = () => {
  return (
    <div>
      {/* Hero Section */}
      <div>
        <img
          src="https://res.cloudinary.com/dheuqshro/image/upload/v1716880222/E-vehicle/Lab%20Pics/Gram_Tarang_E-Mobility_kaiqsi.png"
          alt=""
        />
      </div>

      {/* Heading */}
      <div>
        <h1 className="font-PaytoneOne text-4xl p-5">
          Purchase In <span className="customunderline">Range </span> of Prices
        </h1>
      </div>

      {/* Items Shown  */}
      <div className="grid xs:gridcols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 mx-auto max-w-6xl gap-x-2  space-y-10  my-10">
        {SpareParts.map((item) => (
          <SpareCard product={item} />
        ))}
      </div>

      {/* Disclaimer */}
      <div>
        <p className="text-sm lg:ml-20"> <span className="font-bold" >Note - </span>Product Quality varies according to the price</p>
      </div>

      {/* Reach Us */}
      <div className="mt-10">
        <ReachUs />
      </div>
    </div>
  );
};

export default Spares;
