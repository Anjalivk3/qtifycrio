import React, { useState, useEffect } from "react";
import {ReactComponent as LeftArrow} from '../../../assets/leftArrow.svg';
import {useSwiper} from 'swiper/react';
import 'swiper/css';
import styles from './CarouselLeft.module.css';
const CarouselLeft = ()=>{
    let swiper = useSwiper();
   // console.log("carousel left swiper", swiper);
    //console.log("carousel left", swiper.isBeginning);
    const [isBeginning, setIsBeginning]=useState(true);

    useEffect(()=>{
        if(!swiper) return;
        const handleSlideChange=()=>{
            setIsBeginning(swiper.isBeginning);
        };
        swiper.on("slideChange", handleSlideChange);
        handleSlideChange();
        return ()=>{swiper.off("slideChange", handleSlideChange);};
    }, [swiper]);

    return (<div className={styles.lNavigation}>{!isBeginning && <LeftArrow onClick={()=>swiper.slidePrev()}/>}</div>);
}

export default CarouselLeft;