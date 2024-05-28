import React, { useEffect, useState } from 'react'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard'
import AliceCarousel from 'react-alice-carousel'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'
import { Button } from '@mui/material'
import 'react-alice-carousel/lib/alice-carousel.css';
import { useLocation } from 'react-router-dom'
import '../../../index.css'



const HomeSectionCarousel = ({data}) => {

    const [activeIndex, setActiveIndex] = useState(0);
    const location = useLocation();
    const pathname = location.pathname;
    const responsive = pathname != "/product" ? {
        0: { items: 1 },
        600 : {items : 1.5},
        720: { items: 2 },
        1024: { items: 2.5 }
    } : {
        0: { items: 1 },
        600 : {items : 1},
        720: { items: 1 },
        1024: { items: 1 }
    };
    
    // console.log("Data in HomeSectionCarousel -- ", data);
    const items =  data.map((item) => <HomeSectionCard product={item} />)


    // const slidePrev = () => setActiveIndex(activeIndex - 1)
    // const slideNext = () => setActiveIndex(activeIndex + 1)

    const syncActiveIndex = (e) => {
        setActiveIndex(e.item);
        console.log("Current Active Index - ", activeIndex)
    };
    // const print = () => {
    //     console.log("onSlideChanged activated ..!")
    // }

    return (
        // Past Styling -  ${pathname === '/product' ? "" : "
        <div className={`${pathname === '/product' ? "lg:w-[80%]" : "border" }`}>
            {/* <h1 className='font-extrabold text-2xl text-gray-800 px-4 py-5'>{sectionName}</h1> */}
            {/* Past Styling -  ${pathname === '/product' ? "md:h-[80vh] p-3" : card*/}
            <div className= {` relative   ${pathname === "/product" ? "" : "p-5"} `} >
                <AliceCarousel
                    // activeIndex={activeIndex}
                    items={items}
                    responsive={responsive}
                    renderNextButton={() => {
                        // 
                        return (activeIndex !== items.length-1  && <Button  variant='contained' className='z-50 bg-white carouselButton'
                                       sx={{  position: "absolute", top: '8rem', right: '0rem', bgcolor: 'white', transform: 'translateX(50%) rotate(90deg)' }}  >
                                        <KeyboardArrowLeft sx={{ color: 'black', transform: 'rotate(90deg)' }} />
                              </Button>)
                    }}
                    renderPrevButton={() => {
                        return (activeIndex !== 0 && <Button  variant='contained' sx={{ position: 'absolute', top: '8rem', left: '0', bgcolor: 'white', transform: 'translateX(-50%) rotate(-90deg)' }}>
                                       <KeyboardArrowRight sx={{ color: 'black', transform: 'rotate(-90deg)' }} />
                              </Button>)
                    }}
                    disableDotsControls
                    onSlideChanged={syncActiveIndex}
                  
                    
                    />
                
                {/* { ------------ No Need to Render Buttons Seperately -------------
                    <Button onClick={slideNext} variant='contained' className='z-50 bg-white'
                        sx={{ position: "absolute", top: '8rem', right: '0rem', bgcolor: 'white', transform: 'translateX(50%) rotate(90deg)' }}  >
                        <KeyboardArrowLeft sx={{ color: 'black', transform: 'rotate(90deg)' }} />
                    </Button>
                }

                {
                    <Button onClick={slidePrev} variant='contained' sx={{ position: 'absolute', top: '8rem', left: '0', bgcolor: 'white', transform: 'translateX(-50%) rotate(-90deg)' }}>
                        <KeyboardArrowRight sx={{ color: 'black', transform: 'rotate(-90deg)' }} />
                    </Button>
                } */}
           
            </div>

            

        </div>
    )
}

export default HomeSectionCarousel