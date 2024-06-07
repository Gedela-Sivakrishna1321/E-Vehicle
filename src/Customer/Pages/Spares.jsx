import React, { useState } from "react";
import SpareCard from "../Components/SpareCard/SpareCard";
import { SpareParts } from "../../Data/SpareParts";
import ReachUs from "../Components/ReachUs/ReachUs";
import Aos from 'aos';
import 'aos/dist/aos.css'

const Spares = () => {

  React.useEffect(() => {
    fetchSparesData();
    fetchSpareBannerData();
    Aos.init({once : true, duration : 1000});
  }, [])

  const [sparesData, setSparesData] = useState();
  const [spareBannerImage, setSpareBannerImage] = useState();

  async function fetchSparesData() {

    const res = await fetch('https://script.google.com/macros/s/AKfycbxI-cslLCes1w3zzGuII1X60hb8VdVbI-Ut0IXKNAR0WcGUzRSC2aSTt9gWbg6KfEyS/exec?sheet=Spare_Parts');

    const data = await res.json();

    setSparesData(data);

  }

  async function fetchSpareBannerData() {

    const res = await fetch('https://script.google.com/macros/s/AKfycbxI-cslLCes1w3zzGuII1X60hb8VdVbI-Ut0IXKNAR0WcGUzRSC2aSTt9gWbg6KfEyS/exec?sheet=Banner_Images');

    const data = await res.json();
    // console.log("Data = ", data);
    setSpareBannerImage(data[0]?.SparesPage.split("+"));
}

  // console.log("Spares data = ", sparesData);
  // console.log("Spare Banner image = ", spareBannerImage);
  
  const imageUrl = spareBannerImage?.map((item) => item);

  const offlineUrl = 'https://res.cloudinary.com/dheuqshro/image/upload/v1716880222/E-vehicle/Lab%20Pics/Gram_Tarang_E-Mobility_kaiqsi.png';

  // console.log("ImageUrl = ", imageUrl);
  
  return (
    <div>
      {/* Hero Section */}
      <div 
        data-aos = "fade-right"
      >
        <img
          src={offlineUrl}
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
      <div
      data-aos = "zoom-in"
       className="grid xs:gridcols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 mx-auto max-w-6xl gap-x-2  space-y-10  my-10">
        {sparesData?.map((item) => (
          <SpareCard product={item} />
        ))}
      </div>

      {/* Disclaimer */}
      <div>
        <p className="text-sm m-6 sm:ml-10 lg:ml-20"> <span className="font-bold" >Note - </span>Product Quality varies according to the price</p>
      </div>

      {/* Reach Us */}
      <div className="mt-10">
        <ReachUs />
      </div>
    </div>
  );
};

export default Spares;
