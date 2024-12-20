import React, { useEffect, useState } from 'react';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import AliceCarousel from 'react-alice-carousel';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { Button } from '@mui/material';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useLocation } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Oval } from 'react-loader-spinner';

const HomeSectionCarousel = ({ data }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [carouselKey, setCarouselKey] = useState(0); // Key to force re-render
    const location = useLocation();
    const pathname = location.pathname;

    const responsive = pathname !== '/product'
        ? {
            0: { items: 1 },
            600: { items: 1.5 },
            720: { items: 2 },
            1024: { items: 2.5 },
        }
        : {
            0: { items: 1 },
            600: { items: 1 },
            720: { items: 1 },
            1024: { items: 1 },
        };

    useEffect(() => {
        // Reset active index and force carousel remount when data changes
        setActiveIndex(0);
        setCarouselKey((prevKey) => prevKey + 1); // Change key to remount AliceCarousel
    }, [data]);

    const items = pathname === '/'
        ? data.map((item) => <HomeSectionCard product={item} />)
        : data[0]?.urls.map((url) => <HomeSectionCard product={url} />);

    const syncActiveIndex = (e) => {
        setActiveIndex(e.item); // Sync the current active index
    };

    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div className='p-5 sm:py-10 lg:py-20 lg:px-10 box-border'>
            {data ? (
                <div className={`${pathname === '/product' ? 'lg:w-[80%]' : 'border'} hidden lg:block`}>
                    <div data-aos="fade" className={`relative ${pathname === '/product' ? '' : 'p-5'}`}>
                        <AliceCarousel
                            key={carouselKey} // Force remount on data change
                            activeIndex={activeIndex}
                            items={items}
                            responsive={responsive}
                            renderNextButton={() => {
                                return (
                                    activeIndex < items.length - 1 && (
                                        <Button
                                            variant="contained"
                                            className="z-50 bg-white carouselButton"
                                            sx={{
                                                position: 'absolute',
                                                top: '8rem',
                                                right: '0rem',
                                                bgcolor: 'white',
                                                transform: 'translateX(50%) rotate(90deg)',
                                            }}
                                            onClick={() => setActiveIndex(activeIndex + 1)}
                                        >
                                            <KeyboardArrowLeft sx={{ color: 'black', transform: 'rotate(90deg)' }} />
                                        </Button>
                                    )
                                );
                            }}
                            renderPrevButton={() => {
                                return (
                                    activeIndex > 0 && (
                                        <Button
                                            variant="contained"
                                            sx={{
                                                position: 'absolute',
                                                top: '8rem',
                                                left: '0',
                                                bgcolor: 'white',
                                                transform: 'translateX(-50%) rotate(-90deg)',
                                            }}
                                            onClick={() => setActiveIndex(activeIndex - 1)}
                                        >
                                            <KeyboardArrowRight sx={{ color: 'black', transform: 'rotate(-90deg)' }} />
                                        </Button>
                                    )
                                );
                            }}
                            disableDotsControls
                            onSlideChanged={syncActiveIndex} // Update active index
                        />
                    </div>
                </div>
            ) : (
                <div className="w-full flex justify-center my-5">
                    <Oval
                        visible={true}
                        height="40"
                        width="40"
                        color="#0CAFFF"
                        ariaLabel="oval-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                    />
                </div>
            )}

            {data ? (
                <div className="gap-y-5 lg:hidden mb-4 grid grid-cols-1 md:grid-cols-2">
                    {pathname === '/' &&
                        data.map((product) => (
                            <div>
                                <HomeSectionCard product={product} />
                            </div>
                        ))}

                    {pathname === '/product' &&
                        data?.map((product) =>
                            product.urls?.map((url) => (
                                <div>
                                    <HomeSectionCard product={url} />
                                </div>
                            ))
                        )}
                </div>
            ) : (
                <div className="w-full flex justify-center my-5">
                    <Oval
                        visible={true}
                        height="40"
                        width="40"
                        color="#0CAFFF"
                        ariaLabel="oval-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                    />
                </div>
            )}
        </div>
    );
};

export default HomeSectionCarousel;
