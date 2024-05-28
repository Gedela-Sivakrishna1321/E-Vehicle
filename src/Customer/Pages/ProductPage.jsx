import React, { useState } from "react";

import HomeSectionCarousel from "../Components/HomeSectionCarousel/HomeSectionCarousel";
import { e_vehicles } from "../../Data/E_vehicles";
import ProductTable from "../Components/ProductTable/ProductTable";
import ReachUs from "../Components/ReachUs/ReachUs";

const ProductPage = () => {
  const [activeTab, setActiveTab] = useState(
    localStorage.getItem("checkProduct")
  );
  console.log("Active Tab - ", activeTab);
  const data = e_vehicles.filter((item) => item.name === activeTab)[0]
    .products[0].Urls;
  // console.log("Data -- ", data);
  const tabs = [
    { name: "4 Wheeler Buggy" },
    { name: "Goods Carrier" },
    { name: "Passenger" },
    { name: "Loader Van" },
    { name: "Food Van" },
    { name: "Garbage Van" },
    { name: "Exihibition Van" },
    { name: "Ambulance" },
    { name: "School Van" },
  ];

  return (
    <div>
      {/* Vehicle Images */}
      <div className=" productsbg  p-5 box-border">
      
        <div className="text-xl font-medium sm:text-2xl lg:text-3xl">
          Explore our three wheeler collection
        </div>

        <div className="flex flex-col lg:flex-row lg:justify-between lg:px-6 box-border items-center space-y-8    ">

          <div className=" pt-12 text-lg flex flex-col items-center ">
            <div className="flex flex-wrap items-center  space-x-2 space-y-2 lg:flex-col lg:items-start ">
              {tabs.map((item) => (
                <span
                  className={`text-lg w-max cursor-pointer p-2  rounded-md border border-slate-500 ${
                    activeTab === item.name
                      ? " bg-yellow-300  font-medium"
                      : ""
                  }`}
                  onClick={() => setActiveTab(item.name)}
                >
                  {item.name}
                </span>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-[70%]  h-full  ">
           
            <div className="uppercase font-bold tracking-wide text-lg lg:text-2xl text-center m-2">
              {activeTab}
            </div>

            
            <div className="" >
              <HomeSectionCarousel data={data} />
            </div>
            

          </div>

        </div>
      </div>

      {/* Techinical Specifications */}
      <div className="bg-black text-white flex flex-col items-center space-y-3 py-3">
        <h1 className="font-bold text-2xl">TECHNICAL SPECIFICATIONS</h1>
        <div className="pb-4">
          <ProductTable activeTab={activeTab} />
        </div>
      </div>

      {/* Reach Us */}
       <ReachUs/>

    </div>
  );
};

export default ProductPage;
