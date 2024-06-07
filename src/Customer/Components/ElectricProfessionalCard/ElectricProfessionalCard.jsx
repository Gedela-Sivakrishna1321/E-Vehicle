import React, { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css'

const ElectricProfessionalCard = ({data}) => {

  useEffect(() => {
    Aos.init({once : true, duration : 2000});
  }, [])

  return (
    <div data-aos= "zoom-in"
     className="max-w-sm px-3 border-l-4 border-blue-800">
      <h1 className="font-bold text-lg">{data.title}</h1>
      <p className="pb-16">
        {data.content}
      </p>
    </div>
  );
};

export default ElectricProfessionalCard;
