import React, { useState, useEffect } from "react";
import {ReactComponent as RightArrow} from '../../../assets/rightArrow.svg';
import {useSwiper, Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import styles from './CarouselRight.module.css';
const CarouselRight = ()=>{
    let swiper = useSwiper();
    const[isEnd, setIsEnd]=useState(true);

    useEffect(()=>{
      if(!swiper) return;

      const handleSlideChange=()=>{
        setIsEnd(swiper.isEnd);
    };
    swiper.on("slideChange", handleSlideChange);
    handleSlideChange();
    return ()=>{swiper.off("slideChange", handleSlideChange);};
        
    }, [swiper]);

    return (<div className={styles.rNavigation}>{!isEnd && <RightArrow onClick={()=>swiper.slideNext()}/>}</div>);
}

export default CarouselRight;