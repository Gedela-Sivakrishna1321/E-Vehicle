import React, { useState, useEffect } from "react";
import SpareCard from "../Components/SpareCard/SpareCard";
import ReachUs from "../Components/ReachUs/ReachUs";
import Aos from 'aos';
import 'aos/dist/aos.css';
import Loader from "../Components/Loader/Loader";

const Spares = () => {
  const [sparesData, setSparesData] = useState(null);
  const [spareBannerImage, setSpareBannerImage] = useState(null);

  useEffect(() => {
    // Load cached data from localStorage
    const cachedSparesData = localStorage.getItem('sparesData');
    const cachedSpareBannerImage = localStorage.getItem('spareBannerImage');

    if (cachedSparesData) setSparesData(JSON.parse(cachedSparesData));
    else fetchSparesData();

    if (cachedSpareBannerImage) setSpareBannerImage(JSON.parse(cachedSpareBannerImage));
    else fetchSpareBannerData();

    Aos.init({ once: true, duration: 1000 });
  }, []);

  // Fetch spare parts data and store in localStorage
  async function fetchSparesData() {
    try {
      const res = await fetch('https://script.google.com/macros/s/AKfycbxI-cslLCes1w3zzGuII1X60hb8VdVbI-Ut0IXKNAR0WcGUzRSC2aSTt9gWbg6KfEyS/exec?sheet=Spare_Parts');
      const data = await res.json();
      localStorage.setItem('sparesData', JSON.stringify(data)); // Cache data
      setSparesData(data);
    } catch (error) {
      console.error("Error fetching spares data:", error);
    }
  }

  // Fetch spare banner image data and store in localStorage
  async function fetchSpareBannerData() {
    try {
      const res = await fetch('https://script.google.com/macros/s/AKfycbxI-cslLCes1w3zzGuII1X60hb8VdVbI-Ut0IXKNAR0WcGUzRSC2aSTt9gWbg6KfEyS/exec?sheet=Banner_Images');
      const data = await res.json();
      const imageArray = data[0]?.SparesPage.split("+") || [];
      localStorage.setItem('spareBannerImage', JSON.stringify(imageArray)); // Cache data
      setSpareBannerImage(imageArray);
    } catch (error) {
      console.error("Error fetching spare banner image data:", error);
    }
  }

  const imageUrl = spareBannerImage?.[0] || 'https://res.cloudinary.com/dheuqshro/image/upload/v1716880222/E-vehicle/Lab%20Pics/Gram_Tarang_E-Mobility_kaiqsi.png';

  return (
    <div>
      {/* Hero Section */}
      <div data-aos="fade-right">
        <img src={imageUrl} alt="Spare Parts Banner" />
      </div>

      {/* Heading */}
      <div>
        <h1 className="font-PaytoneOne text-4xl p-5">
          Purchase In <span className="customunderline">Range </span> of Prices
        </h1>
      </div>

      {/* Items Shown */}
      {sparesData ? (
        <div
          data-aos="zoom-in"
          className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto max-w-6xl gap-x-2 space-y-10 my-10"
        >
          {sparesData.map((item) => (
            <SpareCard product={item} key={item.id} />
          ))}
        </div>
      ) : (
        <Loader />
      )}

      {/* Disclaimer */}
      <div>
        <p className="text-sm m-6 sm:ml-10 lg:ml-20">
          <span className="font-bold">Note - </span>Product Quality varies according to the price
        </p>
      </div>

      {/* Reach Us */}
      <div className="mt-10">
        <ReachUs />
      </div>
    </div>
  );
};

export default Spares;
