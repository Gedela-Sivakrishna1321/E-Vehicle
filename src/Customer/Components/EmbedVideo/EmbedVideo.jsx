import React, { useEffect, useState } from "react";
import { videoLinks } from "../../../Data/YoutubeData";
import Aos from "aos";
import "aos/dist/aos.css";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Oval } from "react-loader-spinner";
import Loader from "../Loader/Loader";

const EmbedVideo =  () => {
  const [youtubeLinksData, setYoutubeLinksData] = useState(null);

  useEffect(() => {
    const cachedData = localStorage.getItem('youtubeLinksData');
    if (cachedData) {
      setYoutubeLinksData(JSON.parse(cachedData));
    } else {
      getData();
    }
    Aos.init({ duration: 2000 });
  }, []);

  async function getData() {
    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbxI-cslLCes1w3zzGuII1X60hb8VdVbI-Ut0IXKNAR0WcGUzRSC2aSTt9gWbg6KfEyS/exec?sheet=YouTube_Videos"
      );
      const data = await res.json();
      setYoutubeLinksData(data);
      localStorage.setItem('youtubeLinksData', JSON.stringify(data));  // Save to localStorage
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <div className="mt-10 mb-5">
      <div className="mx-auto flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-6">
        {
          youtubeLinksData ? 
            youtubeLinksData.map((data, index) => (
              <div key={index} data-aos="fade-up">
                <iframe
                  width="300"
                  height="150"
                  className="rounded-md"
                  src={data.Link}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            ))
          : 
            <Loader />
        }
      </div>
    </div>
  );
};

export default EmbedVideo;
