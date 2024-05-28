import React from "react";
import "../../index.css";

const ContactPage = () => {
  return (
    <div>
      {/* Contact Heading */}
      <div className="text-5xl p-10 pt-24 pl-20  contactbg text-white">
        Contact Us
      </div>

      {/* Map Part */}
      <div className="p-10  bg-black text-white flex justify-evenly shadow-sm ">
        <div className="hidden lg:block">
          <div className="">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3776.798244533531!2d84.13569067394351!3d18.807142560360287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3cf98e2973372d%3A0x7604d36dacc3770e!2sR44Q%2BV82%2C%20Rajaseetapuram%2C%20Odisha%20761211!5e0!3m2!1sen!2sin!4v1716882249715!5m2!1sen!2sin"
              width="600"
              height="450"
              
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Contact Details  */}
        <div>
          <div>
            <h1 className="font-bold uppercase text-lg">
              Gram Tarang E-Mobility
            </h1>
            <p className="font-light text-lg mt-3">Alurinagar, R. Sitapur</p>
            <p className="font-light text-lg">Gajapati, Odisha, 761211</p>
          </div>

          <div>
            <h1 className="font-bold uppercase text-lg mt-4">Email & Phone</h1>
            <p className="">Phone: +91 9439075789, 9668662707</p>
            <p className="">Email: customerservice@centurion.co.in</p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
