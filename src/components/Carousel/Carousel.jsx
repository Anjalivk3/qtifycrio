import React, {useEffect} from "react";
import {useSwiper, Swiper, SwiperSlide} from 'swiper/react';
import CarouselLeft from './CarouselLeft/CarouselLeft';
import CarouselRight from "./CarouselLeft/CarouselLeft";
import styles from './Carousel.module.css';
import 'swiper/css';
import 'swiper/css/navigation';
import {Navigation} from 'swiper/modules';

const CarouselControls = ({data})=>{
  let swiper = useSwiper();
  //console.log("carousel file CarouselControls", data);
  useEffect(()=>{
      swiper.slideTo(0);
  }, [data]);

  return <></>
}

const Carousel = ({data, cardComponent}) =>{

  return (
    <div className={styles.wrapper}>
      <Swiper initialSlide={0} spaceBetween={40} slidesPerView={"auto"} modules={[Navigation]} allowTouchMove>
    <CarouselControls data={data}/>
      <CarouselLeft/>
      <CarouselRight/>
      {data.map((item, indx)=>(
        <SwiperSlide key={indx}>
          {cardComponent(item)}
        </SwiperSlide>
      ))}    
      </Swiper>
    </div>
  )

}

export default Carousel;