import React, { Suspense, lazy, useEffect, useState } from "react";
import MainCarousel from "../../Components/MainCarousel/MainCarousel";
import HomeSectionCarousel from '../../Components/HomeSectionCarousel/HomeSectionCarousel'
import { e_vehicles } from "../../../Data/E_vehicles";

// const HomeSectionCarousel = lazy(() =>
//   import("../../Components/HomeSectionCarousel/HomeSectionCarousel")
// );

const HomePage = () => {
  // console.log("Vehicles Data - ", e_vehicles);

  const [vehiclesData, setVehiclesData] = useState();

  useEffect(() => {
    if(!vehiclesData) {
      fetchE_VehiclesData();
    }
  },[])


  async function fetchE_VehiclesData() {

    const res = await fetch('https://script.google.com/macros/s/AKfycbxI-cslLCes1w3zzGuII1X60hb8VdVbI-Ut0IXKNAR0WcGUzRSC2aSTt9gWbg6KfEyS/exec?sheet=E_Vehicles');

    const data = await res.json();

    setVehiclesData(data);

  }

  // console.log("Vehicles Data - ", vehiclesData)
  // console.log("Type = ", typeof(vehiclesData[0].imageUrls))

  const data = [];

  vehiclesData?.map((item) => {
    const object = {};
    object.name = item.name;
    object.urls = item.imageUrls.replace(/"/g, '').split(" ");
    data.push(object);
  })

  console.log("New Data Object = ", data);

  
  return (
    <div>
      <MainCarousel />

      {/* <Suspense> */}
        <HomeSectionCarousel data={data} />
      {/* </Suspense> */}

      {/* <div className=' p-5 sm:py-10 lg:py-20  lg:px-10 box-border '>
            <HomeSectionCarousel   data={e_vehicles}/>
        </div> */}


    </div>
  );
};

export default HomePage;
