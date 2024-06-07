import React, { useEffect, useState } from 'react'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard'
import AliceCarousel from 'react-alice-carousel'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'
import { Button } from '@mui/material'
import 'react-alice-carousel/lib/alice-carousel.css';
import { useLocation } from 'react-router-dom'
import '../../../index.css'
import Aos from 'aos'
import 'aos/dist/aos.css';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'



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

    var items =  [];
                                // data.urls?.map((item) => <HomeSectionCard product={item} />);

    if(pathname === "/") {
        items =  data.map((item) => <HomeSectionCard product={item} />);
    }
    else if (pathname === "/product") {
        // console.log("Data From Product Page = ", data);
        items = data[0]?.urls.map((url) => <HomeSectionCard product={url} />);
        
    }

    // console.log("items = ", items);


    const syncActiveIndex = (e) => {
        setActiveIndex(e.item);
        // console.log("Current Active Index - ", activeIndex)
    };

    useEffect(() => {
        Aos.init();
    }, [])


    return (
        
        <div className=' p-5 sm:py-10 lg:py-20  lg:px-10 box-border '>

        <div className={`${pathname === '/product' ? "lg:w-[80%]" : "border" } hidden lg:block`}>
            {/* <h1 className='font-extrabold text-2xl text-gray-800 px-4 py-5'>{sectionName}</h1> */}
            {/* Past Styling -  ${pathname === '/product' ? "md:h-[80vh] p-3" : card*/}
            
           <div
                    data-aos = "fade"
                  className= {` relative   ${pathname === "/product" ? "" : "p-5"} `} >
                      <AliceCarousel
                          // activeIndex={activeIndex}
                          items={items}
                          responsive={responsive}
                          renderNextButton={() => {
                              // 
                              return (activeIndex !== items?.length-1  && <Button  variant='contained' className='z-50 bg-white carouselButton'
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
                 
                  </div>

            

        </div>

        
        
             <div 
      
                className='  gap-y-5 lg:hidden mb-4 grid grid-cols-1 md:grid-cols-2' >
        
                        {pathname === "/" &&
                            data.map((product) => 
                                <div  >
                                    <HomeSectionCard  product={product} />
                                </div>
                            )
                        }
        
        
                        {pathname === "/product" &&
                            data?.map((product) => 
                                product.urls?.map((url) => 
                                
                                <div  >
                                    <HomeSectionCard  product={url} />
                                </div>
        
                                )
                            )
                        }
        
                </div>
        

       
        
        </div>
    )
}

export default HomeSectionCarousel