import React, { useState, useEffect } from "react";
import "../../index.css";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { FiMapPin } from "react-icons/fi";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

const ContactPage = () => {
  const [contactData, setContactData] = useState(null);

  useEffect(() => {
    const cachedData = localStorage.getItem('contactData');
    if (cachedData) {
      setContactData(JSON.parse(cachedData));
    } else {
      fetchContactData();
    }
    Aos.init({ once: true });
  }, []);

  async function fetchContactData() {
    const res = await fetch('https://script.google.com/macros/s/AKfycbxI-cslLCes1w3zzGuII1X60hb8VdVbI-Ut0IXKNAR0WcGUzRSC2aSTt9gWbg6KfEyS/exec?sheet=Contact_Details');
    const data = await res.json();
    setContactData(data);
    localStorage.setItem('contactData', JSON.stringify(data));  // Store fetched data in localStorage
  }

  return (
    <div data-aos="fade-up" data-aos-duration="1500" className="bg-black text-white pb-5">
      {/* Contact Heading */}
      <div className="text-5xl p-10 pt-24 pl-20 contactbg text-white">
        Contact Us
      </div>

      {/* Map Part */}
      <div className="p-10 flex justify-evenly shadow-sm">
        {contactData && (
          <div className="hidden lg:block">
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7553.596693821191!2d84.138266!3d18.807138!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3cf98e2973372d%3A0x7604d36dacc3770e!2sR44Q%2BV82%2C%20Rajaseetapuram%2C%20Odisha%20761211!5e0!3m2!1sen!2sin!4v1717746517184!5m2!1sen!2sin`}
              width="600"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        )}

        {/* Contact Details */}
        <div>
          <div>
            <h1 className="font-bold uppercase text-lg">Gram Tarang E-Mobility</h1>
            {contactData ? (
              <p className="font-light text-lg mt-3">{contactData[0].locality}</p>
            ) : (
              <Skeleton />
            )}
            {contactData ? (
              <p className="font-light text-lg">{contactData[0].district}, {contactData[0].state}, {contactData[0].pincode}</p>
            ) : (
              <Skeleton />
            )}
          </div>

          <div>
            <h1 className="font-bold uppercase text-lg mt-4">Email & Phone</h1>
            {contactData ? (
              <p className="">Phone: +91 {contactData[0].phoneNumber1}, {contactData[0].phoneNumber2}</p>
            ) : (
              <Skeleton />
            )}
            {contactData ? (
              <p className="">Email: {contactData[0].email}</p>
            ) : (
              <Skeleton />
            )}
            <p></p>
          </div>
        </div>
      </div>

      {contactData ? (
        <div className="w-full text-center mx-auto lg:hidden block">
          <a
            href={`${contactData[0].location}`}
            target="_blank"
            rel="noopener noreferrer"
            className="space-x-2 bg-slate-300 hover:cursor-pointer text-black px-4 py-2 rounded-md"
          >
            <img
              className="h-[22px] w-[22px] inline"
              src="https://res.cloudinary.com/dxorxllhb/image/upload/v1734330827/google-maps_d2msmh_vipcha.png"
              alt=""
            />
            <span>Locate Us In Map</span>
          </a>
        </div>
      ) : (
        <Skeleton />
      )}
    </div>
  );
};

export default ContactPage;
