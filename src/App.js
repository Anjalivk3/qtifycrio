import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';
import Section from './components/Section/Section';

// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { fetchTopAlbums } from './api/api';

function App() {
    const [topAlbum, setTopAlbum] = useState([]);
    // const [newAlbum, setNewAlbum] = useState([]);
    const generateTopAlbums = async()=>{
      try {
        const res = await fetchTopAlbums();
        setTopAlbum(res); 
        //console.log("generateTopAlbum", res) ;
      } catch (error) {
        return null; 
      }      
    }

    useEffect(()=>{
      generateTopAlbums();
    }, []);

  return (

    <div className="App"> 

        <Navbar />   
        <Hero />       
          <Section secType="album" secTitle="Top Album" secData={topAlbum}/> 
{/* <p>{topAlbum.map((item)=>(<h4>{item.title}</h4>) )}</p> */}
    </div>
  );
}

export default App;
