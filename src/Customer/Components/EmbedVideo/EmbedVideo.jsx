import React, { useEffect, useState } from "react";
import { videoLinks } from "../../../Data/YoutubeData";
import Aos from "aos";
import "aos/dist/aos.css";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const EmbedVideo =  () => {

  const [youtubeLinksData, setYoutubeLinksData] = useState();

  useEffect(() => {
    getData();
    Aos.init({ duration: 2000 });
  }, []);

  async function getData() {
    
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbxI-cslLCes1w3zzGuII1X60hb8VdVbI-Ut0IXKNAR0WcGUzRSC2aSTt9gWbg6KfEyS/exec?sheet=YouTube_Videos"
      );
    
      const data = await res.json();
      // console.log("Data - ", data);
      setYoutubeLinksData(data);
      // console.log("Data 2 - ", videoLinks);
      
    }

    // console.log("Youtube Links - ", youtubeLinksData);

  return (
    
    <div className="mt-5">
      <div
        data-aos="fade-up"
        className=" mx-auto flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-6 "
      >
        {
          
        
        youtubeLinksData?.map((data) => (

            <iframe
              width="300"
              height="150"
              className="rounded-md"
              src={data.Link}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          
        ))

  
      } 
      </div>
    </div>
  );
};

export default EmbedVideo;
