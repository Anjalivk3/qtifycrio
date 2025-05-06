import React, {useState} from "react";
import styles from "./Section.module.css";
import Card from '../Card/Card';
import {CircularProgress} from '@mui/material';
import Carousel from '../Carousel/Carousel';


 const Section = ({secType, secTitle, secData, toggle=true})=>{
    //console.log("section file secData", secData);
    const [carouselToggle, setCarouselToggle] = useState(true);
    const handleToggle = ()=>{
      setCarouselToggle(!carouselToggle);
    }
   
     return (<div>
     <div className={styles.sectionTitle}>
      <h3>{secTitle}</h3>
      <h4 onClick={handleToggle} className={styles.togglerText}>
        {toggle?(carouselToggle?"Show All":"Collapse All"):""}
      </h4>
      </div>
       {secData.length?(<div>
        {!carouselToggle?(<div className={styles.allWrapper}>
          {secData.map((album)=>(<Card data={album} type={secType} key={album.id}/>))}
        </div>):<div>
          <Carousel data={secData} cardComponent={(secData)=><Card data={secData} type={secType}/>
        } />
          </div>}
      </div>):(<div className={styles.progressBar}>
        <CircularProgress/>
      </div>)} 
     
     </div>)
}

export default Section;