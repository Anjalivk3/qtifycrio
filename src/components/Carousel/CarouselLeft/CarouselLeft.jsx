import React, { useState, useEffect } from "react";
import {leftArrow} from '../../../assets/leftArrow.svg';
import {useSwiper, Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import styles from './CarouselLeft.module.css';
const CarouselLeft = ()=>{
    let swiper = useSwiper();
    console.log("carousel left swiper", swiper);
    console.log("carousel left", swiper.isBeginning);
    const [isBeginning, setIsBeginning]=useState(swiper.isBeginning);

    useEffect(()=>{
        swiper.on("slideChange", ()=>{
            setIsBeginning(swiper.isBeginning);
        });
    }, [swiper]);

    return (<div className={styles.lNavigation}>{!isBeginning && <leftArrow onClick={()=>swiper.slidePrev()}/>}</div>);
}

export default CarouselLeft;