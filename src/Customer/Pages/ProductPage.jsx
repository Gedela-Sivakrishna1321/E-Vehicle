import React, { useEffect, useState } from "react";
import HomeSectionCarousel from "../Components/HomeSectionCarousel/HomeSectionCarousel";
import ProductTable from "../Components/ProductTable/ProductTable";
import ReachUs from "../Components/ReachUs/ReachUs";
import "../../index.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Oval } from "react-loader-spinner";
import Loader from "../Components/Loader/Loader";

const ProductPage = () => {
  const [vehiclesData, setVehiclesData] = useState(null);
  const [activeTab, setActiveTab] = useState(localStorage.getItem("checkProduct") || "");

  useEffect(() => {
    const cachedData = localStorage.getItem("vehiclesData");
    if (cachedData) {
      setVehiclesData(JSON.parse(cachedData));
    } else {
      fetchE_VehiclesData();
    }
  }, []);

  async function fetchE_VehiclesData() {
    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbxI-cslLCes1w3zzGuII1X60hb8VdVbI-Ut0IXKNAR0WcGUzRSC2aSTt9gWbg6KfEyS/exec?sheet=E_Vehicles"
      );
      const data = await res.json();
      const formattedData = data.map((item) => ({
        name: item.name,
        urls: item.imageUrls.replace(/"/g, "").split(" "),
      }));
      setVehiclesData(formattedData);
      localStorage.setItem("vehiclesData", JSON.stringify(formattedData));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  // Update activeTab in localStorage whenever it changes
  useEffect(() => {
    if (activeTab) {
      localStorage.setItem("checkProduct", activeTab);
    }
  }, [activeTab]);

  const tabs = vehiclesData?.map((item) => item.name);
  const CarouselData = vehiclesData?.filter((item) => item.name === activeTab);
  console.log("Active Tab = ", activeTab);
  console.log("tabs = ", tabs);
  console.log("carousel data = ", CarouselData);
  console.log("Vehicles Data = ", vehiclesData);

  return (
    <div>
      {/* Vehicle Images */}
      <div className="productsbg p-5 box-border">
        <div className="text-xl font-medium sm:text-2xl lg:text-3xl">
          Explore our three-wheeler collection
        </div>

        <div className="flex flex-col lg:flex-row lg:justify-between lg:px-6 box-border items-center space-y-8">
          {tabs ? (
            <div className="pt-12 text-lg flex flex-col items-center">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-10 lg:grid-cols-1 lg:gap-5 md:grid-cols-4 lg:flex-col">
                {tabs.map((item) => (
                  <span
                    key={item}
                    className={`text-lg flex justify-center items-center btnShake text-center min-w-full cursor-pointer p-2 rounded-md border border-slate-500 ${
                      activeTab === item ? "bg-yellow-300 font-medium" : ""
                    }`}
                    onClick={() => setActiveTab(item)}
                  >
                    {item || <Skeleton />}
                  </span>
                ))}
              </div>
            </div>
          ) : (
            <Loader />
          )}

          <div className="w-full lg:w-[70%] h-full">
            <div className="uppercase font-bold tracking-wide text-lg lg:text-2xl text-center m-2">
              {activeTab}
            </div>

            {CarouselData ? (
              <div>
                <HomeSectionCarousel data={CarouselData} />
              </div>
            ) : (
              <div className="w-full flex justify-center my-5">
                <Oval
                  visible={true}
                  height="40"
                  width="40"
                  color="#0CAFFF"
                  ariaLabel="oval-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Technical Specifications */}
      <div className="bg-black text-white flex flex-col items-center space-y-3 py-3">
        <h1 className="font-bold text-2xl">TECHNICAL SPECIFICATIONS</h1>
        <div className="pb-4">
          <ProductTable activeTab={activeTab} />
        </div>
      </div>

      {/* Reach Us */}
      <ReachUs />
    </div>
  );
};

export default ProductPage;
