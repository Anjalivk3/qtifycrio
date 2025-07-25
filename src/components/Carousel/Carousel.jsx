import React, { useEffect } from 'react';

// Import Swiper React components and hooks
import { useSwiper, Swiper, SwiperSlide } from 'swiper/react';
import CarouselLeft from './CarouselLeft/CarouselLeft';
import CarouselRight from "./CarouselRight/CarouselRight";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import styles from "./Carousel.module.css";

//No use for this currently 
import { Navigation } from 'swiper/modules';


const Controls=({data})=>{
    let swiper = useSwiper();
    
    useEffect(()=>{
        //swiper.slideTo(index, speed, runCallbacks(optional))
        swiper.slideTo(0,null)
    },[data])

    return <>
    
    </>
}

const Carousel = ({data,renderCardComponent}) => {
  return (

    <div className={styles.wrapper}>
      
    <Swiper
        initialSlide={0}
        spaceBetween={10}
        slidesPerView={5}        
        centeredSlides={false}
         // The Pagination module from Swiper.js is explicitly imported and passed to the modules prop of the Swiper component.
         modules={[Navigation]}
        //  className={styles.halfSwiper}
         allowTouchMove         
        >
        <Controls data={data}/>
            <CarouselLeft />
         <CarouselRight />
         {/* since we need to show the cards of album inside the section, hence use SwiperSlide inside map on data array */}
      {data.map((item, index) => (
         // renderCardComponent is using the card component in it to show cards, see in section component
         
        <SwiperSlide key={index}>{renderCardComponent(item)}</SwiperSlide>        
      ))}     
       
    </Swiper>
    </div>
  )
}

export default Carousel;

/*
1. rafce shortcut

2. swiper.slideTo(index, speed, runCallbacks):	
    Run transition to the slide with index number equal to 'index' parameter for the duration equal to 'speed' parameter.

3.  In React, a swiper component is typically used to create interactive and touch-enabled carousels or slideshows. 
    It allows users to swipe through a series of content panels horizontally or vertically on touch-enabled devices or through mouse drag on desktop browsers.


*/