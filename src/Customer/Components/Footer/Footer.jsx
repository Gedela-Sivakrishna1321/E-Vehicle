import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Aos from 'aos';
import 'aos/dist/aos.css';
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import '../../../index.css'

const Footer = () => {
  const navigate = useNavigate();
  const [contactData, setContactData] = useState(null);

  useEffect(() => {
    // Initialize AOS library
    Aos.init({ once: true });

    // Check localStorage for cached contact data
    const cachedData = localStorage.getItem('contactData');
    if (cachedData) {
      setContactData(JSON.parse(cachedData));
    } else {
      fetchContactData();
    }
  }, []);

  async function fetchContactData() {
    try {
      const res = await fetch('https://script.google.com/macros/s/AKfycbxI-cslLCes1w3zzGuII1X60hb8VdVbI-Ut0IXKNAR0WcGUzRSC2aSTt9gWbg6KfEyS/exec?sheet=Contact_Details');
      const data = await res.json();
      setContactData(data);
      // Cache the data in localStorage
      localStorage.setItem('contactData', JSON.stringify(data));
    } catch (error) {
      console.error("Error fetching contact data:", error);
    }
  }

  return (
    <div data-aos="fade-left">
      <Grid
        className="text-center"
        container
        sx={{ color: "white", bgcolor: "black", py: 3 }}
      >
        {/* WhatsApp Button */}
        {contactData ? (
          <a href={`https://wa.me/91${contactData[0].whatsappNumber}`} target="_blank" rel="noopener noreferrer">
            <img
              className="h-[2.15rem] ml-4 sm:h-[2.25rem] md:h-[2.5rem] lg:h-[3rem]"
              src="https://res.cloudinary.com/dxorxllhb/image/upload/v1734330814/Chat_Button_g6ugmf_gomh5d.png"
              alt="Chat on WhatsApp"
            />
          </a>
        ) : (
          <Skeleton />
        )}

        {/* Footer Content */}
        <Grid item xs={12} className="pt-10">
          <div className="flex flex-col sm:flex-row gap-y-2 sm:justify-around uppercase tracking-wider sm:mx-9 text-sm sm:text-base">
            <span onClick={() => navigate("/contact-us")} className="text-yellow-500 font-semibold cursor-pointer removeBlueHighlight noSelect">
              Contact Us
            </span>

            <p>GT E-mobility</p>

            <div className="flex flex-col space-y-2">
              <p className="text-yellow-500 font-semibold">Follow Us</p>
              <div className="flex justify-center space-x-2">
                {/* Social Media Links */}
                {contactData && (
                  <>
                    <a href={`${contactData[0].facebook}`} target="_blank" rel="noopener noreferrer">
                      <img
                        className="w-[32px] h-[32px] cursor-pointer"
                        src="https://res.cloudinary.com/dxorxllhb/image/upload/v1734330826/facebook_xvsb2n_ltudgf.png"
                        alt="Facebook"
                      />
                    </a>
                    <a href={`${contactData[0].youtube}`} target="_blank" rel="noopener noreferrer">
                      <img
                        className="w-[32px] h-[32px] cursor-pointer"
                        src="https://res.cloudinary.com/dxorxllhb/image/upload/v1734330812/youtube_pizkbr_zcnzgd.png"
                        alt="YouTube"
                      />
                    </a>
                    <a href={`${contactData[0].linkedin}`} target="_blank" rel="noopener noreferrer">
                      <img
                        className="w-[32px] h-[32px] cursor-pointer"
                        src="https://res.cloudinary.com/dxorxllhb/image/upload/v1734330831/linkedin_vdyews_brer7o.png"
                        alt="LinkedIn"
                      />
                    </a>
                    <a href={`${contactData[0].instagram}`} target="_blank" rel="noopener noreferrer">
                      <img
                        className="w-[32px] h-[32px] cursor-pointer"
                        src="https://res.cloudinary.com/dxorxllhb/image/upload/v1734330829/instagram_f0gcea_buydtm.png"
                        alt="Instagram"
                      />
                    </a>
                  </>
                )}
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
