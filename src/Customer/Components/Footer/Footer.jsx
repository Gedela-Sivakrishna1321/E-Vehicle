import { Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Grid
        className="text-center"
        container
        sx={{ color: "white", bgcolor: "black", py: 3 }}
      >
        <Grid item xs={12} className="pt-10">
          <div className="flex flex-col sm:flex-row gap-y-2 sm:justify-around uppercase tracking-wider sm:mx-9 text-sm sm:text-base">
            <a href="/contact-us" className=" text-yellow-500 font-semibold">
              Contact Us
            </a>

            <p>Brand Name</p>

            <div className="flex flex-col space-y-2 ">
              <p className="text-yellow-500 font-semibold">Connect</p>
              <div className="flex  justify-center space-x-2 ">
                <a
                  href="https://www.facebook.com/pages/Centurion%20University/144700615599402/"
                  target="_blank"
                >
                  <img
                    className="w-[22px] h-[22px] cursor-pointer "
                    src="https://res.cloudinary.com/dheuqshro/image/upload/v1715357464/Icons/facebook_xvsb2n.png"
                    alt=""
                  />
                </a>
                <a
                  href="https://www.youtube.com/@cutmodisha7103"
                  target="_blank"
                >
                  <img
                    className="w-[22px] h-[22px] cursor-pointer"
                    src="https://res.cloudinary.com/dheuqshro/image/upload/v1715357464/Icons/youtube_pizkbr.png"
                    alt=""
                  />
                </a>
                <a
                  href="https://www.linkedin.com/school/centurion-university-of-technology-and-management/"
                  target="_blank"
                >
                  <img
                    className="w-[22px] h-[22px] cursor-pointer"
                    src="https://res.cloudinary.com/dheuqshro/image/upload/v1715357465/Icons/linkedin_vdyews.png"
                    alt=""
                  />
                </a>
                <a
                  href="https://www.instagram.com/centurion.university.official/?hl=en"
                  target="_blank"
                >
                  <img
                    className="w-[22px] h-[22px] cursor-pointer"
                    src="https://res.cloudinary.com/dheuqshro/image/upload/v1715357465/Icons/instagram_f0gcea.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </Grid>

        {/* Footer */}
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
