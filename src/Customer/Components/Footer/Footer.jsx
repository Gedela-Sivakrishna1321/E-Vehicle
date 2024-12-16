import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Aos from 'aos';
import 'aos/dist/aos.css'
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const Footer = () => {
  const navigate = useNavigate();
 
  useEffect(() => {
    fetchContactData();
    Aos.init({once : true});
  }, [])

  const [contactData, setContactData] = useState();

  async function fetchContactData() {

    const res = await fetch('https://script.google.com/macros/s/AKfycbxI-cslLCes1w3zzGuII1X60hb8VdVbI-Ut0IXKNAR0WcGUzRSC2aSTt9gWbg6KfEyS/exec?sheet=Contact_Details');

    const data = await res.json();

    setContactData(data);

  }

  // console.log("Contact Details = ", contactData);

  return (
    <div data-aos = "fade-left"  >
      <Grid
        className="text-center"
        container
        sx={{ color: "white", bgcolor: "black", py: 3 }}
      >
          {/* https://wa.me/91${contactData[0].whatsappNumber} */}

       { contactData ?
        <a href={`https://wa.me/91${contactData[0].whatsappNumber}`} target="_blank">
          <img
            className="h-[2.15rem] ml-4 sm:h-[2.25rem] md:h-[2.5rem] lg:h-[3rem]"
            src="https://res.cloudinary.com/dxorxllhb/image/upload/v1734330814/Chat_Button_g6ugmf_gomh5d.png"
            alt="Chat on WhatsApp"
          />
        </a>
        : 
        <Skeleton/>  
      }

        <Grid item xs={12} className="pt-10">
          <div className="flex flex-col sm:flex-row gap-y-2 sm:justify-around uppercase tracking-wider sm:mx-9 text-sm sm:text-base">
            <a href="/contact-us" className=" text-yellow-500 font-semibold">
              Contact Us
            </a>

            <p>GT E-mobility</p>

            <div className="flex flex-col space-y-2 ">
              <p className="text-yellow-500 font-semibold">Follow Us </p>
              <div className="flex  justify-center space-x-2 ">
                
                {contactData && <a
                  href={`${contactData[0].facebook}`}
                  target="_blank"
                >
                  <img
                    className="w-[32px] h-[32px] cursor-pointer "
                    src="https://res.cloudinary.com/dxorxllhb/image/upload/v1734330826/facebook_xvsb2n_ltudgf.png"
                    alt=""
                  />
                </a>}

               {contactData && <a href={`${contactData[0].youtube}`} target="_blank">
                  <img
                    className="w-[32px] h-[32px] cursor-pointer"
                    src="https://res.cloudinary.com/dxorxllhb/image/upload/v1734330812/youtube_pizkbr_zcnzgd.png"
                    alt=""
                  />
                </a>}

               {contactData && <a
                  href={`${contactData[0].linkedin}`}
                  target="_blank"
                >
                  <img
                    className="w-[32px] h-[32px] cursor-pointer"
                    src="https://res.cloudinary.com/dxorxllhb/image/upload/v1734330831/linkedin_vdyews_brer7o.png"
                    alt=""
                  />
                </a>}

               {contactData && <a
                  href={`${contactData[0].instagram}`}
                  target="_blank"
                >
                  <img
                    className="w-[32px] h-[32px] cursor-pointer"
                    src="https://res.cloudinary.com/dxorxllhb/image/upload/v1734330829/instagram_f0gcea_buydtm.png"
                    alt=""
                  />
                </a>}


              </div>
            </div>
          </div>
        </Grid>

        <Grid className="pt-5" item xs={12}>
          <Typography variant="body2" component="p" align="center">
            &copy; 2024. All rights reserved.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
