import React, { useEffect, useState } from "react";
import MainCarousel from "../../Components/MainCarousel/MainCarousel";
import HomeSectionCarousel from '../../Components/HomeSectionCarousel/HomeSectionCarousel';

const HomePage = () => {
  const [vehiclesData, setVehiclesData] = useState(null);

  useEffect(() => {
    const cachedData = localStorage.getItem('vehiclesData');
    if (cachedData) {
      setVehiclesData(JSON.parse(cachedData));
    } else {
      fetchE_VehiclesData();
    }
  }, []);

  async function fetchE_VehiclesData() {
    try {
      const res = await fetch('https://script.google.com/macros/s/AKfycbxI-cslLCes1w3zzGuII1X60hb8VdVbI-Ut0IXKNAR0WcGUzRSC2aSTt9gWbg6KfEyS/exec?sheet=E_Vehicles');
      const data = await res.json();
      const formattedData = data.map((item) => ({
        name: item.name,
        urls: item.imageUrls.replace(/"/g, '').split(" "),
      }));

      setVehiclesData(formattedData);
      localStorage.setItem('vehiclesData', JSON.stringify(formattedData));
    } catch (error) {
      console.error("Error fetching data:", error);
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
