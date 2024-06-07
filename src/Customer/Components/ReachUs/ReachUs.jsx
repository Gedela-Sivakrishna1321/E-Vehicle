import React, { useEffect, useState } from 'react'
import { IoMdCall } from "react-icons/io";
import "../../../index.css";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import Aos from 'aos';
import 'aos/dist/aos.css'

const ReachUs = () => {

  useEffect(() => {
    fetchContactData();
    Aos.init();
  }, [])

  const [contactData, setContactData] = useState();

  async function fetchContactData() {

    const res = await fetch('https://script.google.com/macros/s/AKfycbxI-cslLCes1w3zzGuII1X60hb8VdVbI-Ut0IXKNAR0WcGUzRSC2aSTt9gWbg6KfEyS/exec?sheet=Contact_Details');

    const data = await res.json();

    setContactData(data);

  }

  // console.log("Contact Details = ", contactData);

  return (
    <div data-aos = "fade-right" >
        <div className="sm:p-5 border-t-2 text-center py-3 sm:text-start space-y-1">
        <p className="text-3xl font-semibold mb-5 tracking-wide">Reach us</p>

       <div className='sm:flex justify-between'>

        <div className="flex flex-col gap-y-2 ">

          <div className="flex w-full justify-center sm:justify-start ">
            <span className="flex items-center ">
              <img
                className='h-7 w-7'
                src="https://cdn.bajajauto.com/-/media/assets/bajajauto/global/footer-icons/icon-phone.png"
                alt=""
              />{" "}
              <span className="text-sm ml-2 sm:text-lg">Call:</span>{" "}
              <a href="tel:+91 9439075789" className="ml-5">
                {" "}
                <span className="text-blue-400">+91 {contactData ?  contactData[0].phoneNumber1 : ""} </span>
                <span className="ml-2 text-xs"> (9 AM to 9 PM)</span>
              </a>
            </span>
          </div>

          <div className="flex w-full justify-center sm:justify-start">
            <span className="flex">
              <img
                className='h-7 w-7'
                src="https://cdn.bajajauto.com/-/media/assets/bajajauto/global/footer-icons/icon-envelope.png"
                alt=""
              />{" "}
              <span className="text-sm sm:text-lg ml-2 ">Write:</span>{" "}
              <a href="" className="ml-5 text-blue-500">
                {contactData ?  contactData[0]?.email : ""}
              </a>{" "}
            </span>
          </div>

        </div>

        <div className="flex justify-center my-3" >
                    <a href='https://forms.gle/cdY7pErDE2RTG8mb6' target='_blank'
                      className="callBackbg px-3 py-1 sm:px-6  sm:py-2 cursor-pointer text-white 
                   font-semibold rounded-md sm:text-xl hover:opacity-90 w-max  "
                    >
                      <IoMdCall className="inline scale-110 " /> Request Callback{" "}
                    </a>
        </div>

       </div>




      </div>
    </div>
  )
}

export default ReachUs