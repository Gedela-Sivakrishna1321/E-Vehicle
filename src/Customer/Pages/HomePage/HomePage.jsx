import React, { useEffect, useState } from "react";
import MainCarousel from "../../Components/MainCarousel/MainCarousel";
import HomeSectionCarousel from '../../Components/HomeSectionCarousel/HomeSectionCarousel';

const HomePage = () => {
  const [vehiclesData, setVehiclesData] = useState(null);

  useEffect(() => {
    const cachedData = sessionStorage.getItem('vehiclesData');  // Use sessionStorage instead of localStorage
    if (cachedData) {
      setVehiclesData(JSON.parse(cachedData));  // Set the cached data from sessionStorage
    } else {
      fetchE_VehiclesData();  // Fetch data if not available in sessionStorage
    }
  }, []);
  
  async function fetchE_VehiclesData() {
    try {
      const res = await fetch('https://script.google.com/macros/s/AKfycbxI-cslLCes1w3zzGuII1X60hb8VdVbI-Ut0IXKNAR0WcGUzRSC2aSTt9gWbg6KfEyS/exec?sheet=E_Vehicles');
      const data = await res.json();
      const formattedData = data.map((item) => ({
        name: item.name,
        urls: item.imageUrls.replace(/"/g, '').split(" "),  // Format the image URLs
      }));
  
      setVehiclesData(formattedData);  // Set the data in state
      sessionStorage.setItem('vehiclesData', JSON.stringify(formattedData));  // Cache the data in sessionStorage
    } catch (error) {
      console.error("Error fetching data:", error);  // Log any errors
    }
  }
  

  return (
    <div>
      <MainCarousel />
      {vehiclesData && <HomeSectionCarousel data={vehiclesData} />}
    </div>
  );
};

export default HomePage;