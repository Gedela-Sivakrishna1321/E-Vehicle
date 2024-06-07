import React, { useState } from "react";
import "../../index.css";
import LabCard from "../Components/LabCard/LabCard";
import { labsData, labBenfits } from "../../Data/LabData";
import ReachUs from "../Components/ReachUs/ReachUs";
import Aos from 'aos';
import 'aos/dist/aos.css'

const Labs = () => {

  const [labData, setLabData] = useState();
  const [keyFeatures, setKeyFeatures] = useState();
  const [collegeBenfits, setCollegeBenfits] = useState();
  const [studentBenfits, setStudentBenfits] = useState();
  const [active, setActive] = useState("College");

  React.useEffect(() => {
    fetchLabsData();
    fetchLabKeyFeaturesData();
    fetchCollegeBenfitsData();
    fetchStudentBenfitsData();
    Aos.init({once : true});
  }, [])
  

  async function fetchLabsData() {

      const res = await fetch(`https://script.google.com/macros/s/AKfycbxI-cslLCes1w3zzGuII1X60hb8VdVbI-Ut0IXKNAR0WcGUzRSC2aSTt9gWbg6KfEyS/exec?sheet=Lab_Setup`);

      const data =  await res.json();

      setLabData(data);
  }


  async function fetchLabKeyFeaturesData() {

    const res = await fetch(`https://script.google.com/macros/s/AKfycbxI-cslLCes1w3zzGuII1X60hb8VdVbI-Ut0IXKNAR0WcGUzRSC2aSTt9gWbg6KfEyS/exec?sheet=Lab_Key_Features`);

    const data = await res.json();

    // console.log("Key Features Data - ", data);

    setKeyFeatures(data);
  }


  async function fetchCollegeBenfitsData() {

    const res = await fetch('https://script.google.com/macros/s/AKfycbxI-cslLCes1w3zzGuII1X60hb8VdVbI-Ut0IXKNAR0WcGUzRSC2aSTt9gWbg6KfEyS/exec?sheet=Lab_College_Benfits');

    const data = await res.json();

    setCollegeBenfits(data);

  }

  async function fetchStudentBenfitsData() {
    
    const res = await fetch('https://script.google.com/macros/s/AKfycbxI-cslLCes1w3zzGuII1X60hb8VdVbI-Ut0IXKNAR0WcGUzRSC2aSTt9gWbg6KfEyS/exec?sheet=Lab_Student_Benfits');

    const data = await res.json();

    setStudentBenfits(data);

  }

  // console.log("Student Benfits = ", studentBenfits);



  return (
    <div className="w-full">
      {/* Web Page Intro */}
      <div className="flex justify-between py-12 w-full">
        <div className="flex flex-col justify-center items-start space-y-14   px-5">
          <h1 className="font-PaytoneOne text-4xl sm:text-5xl ">
            Electric Vehicle{" "}
            <span className="customunderline2 ">Lab Set-up </span>at your
            college
          </h1>

          {/* <a  href="#labs"
           className="viewLabsbg px-10 py-3 text-white shadow-2xl rounded-full">
            View Labs
          </a> */}
        </div>

      </div>

      {/* Labs Intro */}
      <div id="labs" className="w-full bg-blue-950 p-[5%] space-y-10">
        {/* intro */}
        <div data-aos = "zoom-in" 
             data-aos-duration = "1200"
         className="p-[9%] sm:p-[5%]  bg-white text-center space-y-3 rounded-3xl">
          <h1 className=" text-3xl sm:text-4xl text-red-500 font-bold leading-6">
            Types of EV Labs{" "}
          </h1>
          <h1 className=" text-3xl sm:text-4xl text-red-500 font-bold ">
            We Offer
          </h1>
          <p className="text-lg font-semibold">
            Have a look at our different offerings.
          </p>
        </div>

        <div className="w-full rounded-3xl space-y-10">
          {
          labData?.map((data) => (
  
            <LabCard  labData={data} />
          ))
          }
        </div>
      </div>

      {/* Key Features */}
      <div data-aos = "zoom-in"
       className="w-full py-[5%] px-[6%]">
        <h1 className="text-4xl sm:text-5xl text-red-500 font-bold text-center">
          Key Features of our Labs:
        </h1>

        <div className="w-full flex flex-col lg:flex-row lg:justify-around space-y-10 items-center  pt-10 px-10 text-center">
          {/* Middle Gif part */}
          {/* <div className="w-1/3 flex justify-center items-center scale-110">
            <img
              className="scale-150"
              src="https://static.wixstatic.com/media/fe5d12_9b4e4158611844949353104db2499720~mv2.gif"
              alt=""
            />
          </div> */}

          <div className="lg:w-1/3 space-y-10">
            
            {keyFeatures?.map((item) => 
            
            <div className="lg:w-3/4 flex items-center space-x-3">
              <p className="scale-150">★</p>
              <p>
                {item.Feature.replace(/'/g, '')}
              </p>
            </div>

            )}

            {/* <div className="lg:w-3/4">
              {/* <p className="scale-150">★</p> */}
              {/* <p>Experienced instructors with deep industry insights..</p> */}
            {/* </div> */}
            {/* <div className="lg:w-3/4">
              <p className="scale-150">★</p>
              <p>
                A focus on sustainable solutions and eco-friendly practices.
              </p>
            </div>

            <div className="lg:w-3/4">
              <p className="scale-150">★</p>
              <p>Comprehensive support for students' career journeys.</p>
            </div> */} 
          
          </div>

        </div>
      </div>

      {/* Key Benfits */}
      <div 
      data-aos = "fade-up"
      className="w-full">
        {/* Heading */}
        <div className="bg-red-500 text-white font-bold text-3xl sm:text-4xl text-center py-4">
          How Everyone gets Benefited?
        </div>

        {/* Benfits Part */}
        <div className="w-full">
          <div className="w-full flex justify-between h-14 items-center hover:cursor-pointer">
            <span
              onClick={() => setActive("College")}
              className={`w-1/2 h-full flex justify-center items-center hover:text-white hover:bg-black ${
                active === "College" ? "bg-black text-white" : "bg-slate-200"
              }`}
            >
              College
            </span>

            <span
              onClick={() => setActive("Students")}
              className={`w-1/2 h-full flex justify-center items-center hover:text-white hover:bg-black ${
                active === "Students" ? "bg-black text-white" : "bg-slate-200"
              } border-l-2 border-red-500`}
            >
              Students
            </span>
          </div>

          <div className="bg-black text-white p-[5%]">
            {active === "College" && (
              <>
                <h1 className="text-red-500 text-2xl mb-5">
                  Benefit of Establishing an EV Lab at College:
                </h1>
                <div className="space-y-1">
                  {collegeBenfits?.map((item) => (
                    <div className="px-[5%]">
                      <li className="text-lg">{item.Benfit.replace(/"/g, '')}</li>
                    </div>
                  ))}
                </div>
              </>
            )}

            {active === "Students" && (
              <>
                <h1 className="text-red-500 text-2xl mb-5">
                  Benefits and Learnings to the Students:
                </h1>
                <div className="space-y-1">
                  {studentBenfits?.map((item) => (
                    <div className="px-[5%]">
                      <li className="text-lg">
                        {" "}
                        <span className="font-bold">{item.key.replace(/"/g, '')}</span>{" "}
                        {item.value.replace(/"/g, '')}
                      </li>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Gallery */}

      {/* Reach Us */}
      <ReachUs/>

    </div>
  );
};

export default Labs;
