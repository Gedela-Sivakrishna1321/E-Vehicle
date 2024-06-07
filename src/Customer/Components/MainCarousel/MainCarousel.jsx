import React, { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCarouselData } from './MainCarouselData';
import { RotatingLines } from 'react-loader-spinner';




const MainCarousel = () => {

    useEffect(() => {
        // fetchCarouselData();
    }, [])

    const [carouselData, setCarouselData] = useState();

    async function fetchCarouselData() {

        const res = await fetch('https://script.google.com/macros/s/AKfycbxI-cslLCes1w3zzGuII1X60hb8VdVbI-Ut0IXKNAR0WcGUzRSC2aSTt9gWbg6KfEyS/exec?sheet=Banner_Images');

        const data = await res.json();
        // console.log("Data = ", data);
        setCarouselData(data[0]?.HomePage.split("+"));
    }

    // console.log("Home Page Carousel Data = ", carouselData);

    const items = MainCarouselData.map((item) => <img src={item.imageUrl} className='cursor-pointer' />)
    return (
        <div     className="w-full flex justify-center items-center">
          
                <AliceCarousel
                    disableButtonsControls
                    items={items}
                   autoPlay
                   autoPlayInterval={1000}
                   infinite
                   autoHeight
                   disableDotsControls
                />
        </div>
        
    );
}

export default MainCarousel
    