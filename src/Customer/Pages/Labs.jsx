import React, { useState, useEffect } from "react";
import "../../index.css";
import LabCard from "../Components/LabCard/LabCard";
import ReachUs from "../Components/ReachUs/ReachUs";
import Aos from 'aos';
import 'aos/dist/aos.css';
import Loader from "../Components/Loader/Loader";

const Labs = () => {
  const [labData, setLabData] = useState(
    sessionStorage.getItem('labData') ? JSON.parse(sessionStorage.getItem('labData')) : null
  );
  const [keyFeatures, setKeyFeatures] = useState(
    sessionStorage.getItem('keyFeatures') ? JSON.parse(sessionStorage.getItem('keyFeatures')) : null
  );
  const [collegeBenfits, setCollegeBenfits] = useState(
    sessionStorage.getItem('collegeBenfits') ? JSON.parse(sessionStorage.getItem('collegeBenfits')) : null
  );
  const [studentBenfits, setStudentBenfits] = useState(
    sessionStorage.getItem('studentBenfits') ? JSON.parse(sessionStorage.getItem('studentBenfits')) : null
  );
  const [active, setActive] = useState("College");
  
  useEffect(() => {
    if (!labData) fetchLabsData();
    if (!keyFeatures) fetchLabKeyFeaturesData();
    if (!collegeBenfits) fetchCollegeBenfitsData();
    if (!studentBenfits) fetchStudentBenfitsData();
  
    Aos.init({ once: true });
  }, []);
  
  async function fetchLabsData() {
    try {
      const res = await fetch(`https://script.google.com/macros/s/AKfycbxI-cslLCes1w3zzGuII1X60hb8VdVbI-Ut0IXKNAR0WcGUzRSC2aSTt9gWbg6KfEyS/exec?sheet=Lab_Setup`);
      const data = await res.json();
      sessionStorage.setItem('labData', JSON.stringify(data)); // Save to sessionStorage
      setLabData(data);
    } catch (error) {
      console.error("Error fetching labs data:", error);
    }
  }
  
  async function fetchLabKeyFeaturesData() {
    try {
      const res = await fetch(`https://script.google.com/macros/s/AKfycbxI-cslLCes1w3zzGuII1X60hb8VdVbI-Ut0IXKNAR0WcGUzRSC2aSTt9gWbg6KfEyS/exec?sheet=Lab_Key_Features`);
      const data = await res.json();
      sessionStorage.setItem('keyFeatures', JSON.stringify(data)); // Save to sessionStorage
      setKeyFeatures(data);
    } catch (error) {
      console.error("Error fetching key features data:", error);
    }
  }
  
  async function fetchCollegeBenfitsData() {
    try {
      const res = await fetch('https://script.google.com/macros/s/AKfycbxI-cslLCes1w3zzGuII1X60hb8VdVbI-Ut0IXKNAR0WcGUzRSC2aSTt9gWbg6KfEyS/exec?sheet=Lab_College_Benfits');
      const data = await res.json();
      sessionStorage.setItem('collegeBenfits', JSON.stringify(data)); // Save to sessionStorage
      setCollegeBenfits(data);
    } catch (error) {
      console.error("Error fetching college benefits data:", error);
    }
  }
  
  async function fetchStudentBenfitsData() {
    try {
      const res = await fetch('https://script.google.com/macros/s/AKfycbxI-cslLCes1w3zzGuII1X60hb8VdVbI-Ut0IXKNAR0WcGUzRSC2aSTt9gWbg6KfEyS/exec?sheet=Lab_Student_Benfits');
      const data = await res.json();
      sessionStorage.setItem('studentBenfits', JSON.stringify(data)); // Save to sessionStorage
      setStudentBenfits(data);
    } catch (error) {
      console.error("Error fetching student benefits data:", error);
    }
  }
  
  return (
    <div className="w-full">
      {/* Web Page Intro */}
      <div className="flex justify-between py-12 w-full">
        <div className="flex flex-col justify-center items-start space-y-14 px-5">
          <h1 className="font-PaytoneOne text-4xl sm:text-5xl ">
            Electric Vehicle{" "}
            <span className="customunderline2 ">Laboratory</span> Set-up at your
            college
          </h1>
        </div>
      </div>

      {/* Labs Intro */}
      <div id="labs" className="w-full bg-blue-950 p-[5%] space-y-10">
        {/* intro */}
        <div data-aos="zoom-in" data-aos-duration="1200" className="p-[9%] sm:p-[5%] bg-white text-center space-y-3 rounded-3xl">
          <h1 className="text-3xl sm:text-4xl text-red-500 font-bold leading-6">Types of EV Labs</h1>
          <h1 className="text-3xl sm:text-4xl text-red-500 font-bold">We Offer</h1>
          <p className="text-lg font-semibold">Have a look at our different offerings.</p>
        </div>

        {labData ? (
          <div className="w-full rounded-3xl space-y-10">
            {labData.map((data) => (
              <LabCard labData={data} key={data.id} />
            ))}
          </div>
        ) : (
          <Loader />
        )}
      </div>

      {/* Key Features */}
      {keyFeatures ? (
        <div data-aos="zoom-in" className="w-full py-[5%] px-[6%]">
          <h1 className="text-4xl sm:text-5xl text-red-500 font-bold text-center">Key Features of our Labs:</h1>
          <div className="w-full flex flex-col lg:flex-row lg:justify-around space-y-10 items-center pt-10 px-10 text-center">
            <div className="lg:w-1/3 space-y-10">
              {keyFeatures.map((item) => (
                <div className="lg:w-3/4 flex items-center space-x-3" key={item.Feature}>
                  <p className="scale-150">★</p>
                  <p>{item.Feature.replace(/'/g, '')}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}

      {/* Key Benefits */}
      {collegeBenfits && studentBenfits ? (
        <div data-aos="fade-up" className="w-full">
          {/* Heading */}
          <div className="bg-red-500 text-white font-bold text-3xl sm:text-4xl text-center py-4">How Everyone gets Benefited?</div>

          {/* Benefits */}
          <div className="w-full">
            <div className="w-full flex justify-between h-14 items-center hover:cursor-pointer">
              <span
                onClick={() => setActive("College")}
                className={`w-1/2 h-full flex justify-center items-center hover:text-white hover:bg-black ${active === "College" ? "bg-black text-white" : "bg-slate-200"}`}
              >
                College
              </span>
              <span
                onClick={() => setActive("Students")}
                className={`w-1/2 h-full flex justify-center items-center hover:text-white hover:bg-black ${active === "Students" ? "bg-black text-white" : "bg-slate-200"} border-l-2 border-red-500`}
              >
                Students
              </span>
            </div>

            <div className="bg-black text-white p-[5%]">
              {active === "College" && (
                <>
                  <h1 className="text-red-500 text-2xl mb-5">Benefit of Establishing an EV Lab at College:</h1>
                  <div className="space-y-1">
                    {collegeBenfits.map((item) => (
                      <div className="px-[5%]" key={item.Benfit}>
                        <li className="text-lg">{item.Benfit.replace(/"/g, '')}</li>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {active === "Students" && (
                <>
                  <h1 className="text-red-500 text-2xl mb-5">Benefits and Learnings to the Students:</h1>
                  <div className="space-y-1">
                    {studentBenfits.map((item) => (
                      <div className="px-[5%]" key={item.key}>
                        <li className="text-lg">
                          <span className="font-bold">{item.key.replace(/"/g, '')}</span> {item.value.replace(/"/g, '')}
                        </li>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}

      {/* Reach Us */}
      <ReachUs />
    </div>
  );
};

export default Labs;
