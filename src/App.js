import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';
import Section from './components/Section/Section';


import './App.css';
import { useEffect, useState } from 'react';
import { fetchTopAlbums, fetchNewAlbums } from './api/api';

function App() {
    const [topAlbum, setTopAlbum] = useState([]);
    const [newAlbum, setNewAlbum] = useState([]);
    const generateTopAlbums = async()=>{
      try {
        const res = await fetchTopAlbums();
        setTopAlbum(res); 
        //console.log("generateTopAlbum", res) ;
      } catch (error) {
        return null; 
      }      
    }

    const generateNewAlbums = async()=>{
      try {
        const res = await fetchNewAlbums();
        setNewAlbum(res); 
        console.log("generateNewAlbum", res) ;
      } catch (error) {
        return null; 
      }      
    }


    useEffect(()=>{
      generateTopAlbums();
      generateNewAlbums();
    }, []);

  return (

    <div className="App"> 

        <Navbar />   
        <Hero />       
          <Section type="album" title="Top Album" data={topAlbum}/> 
          <Section type="album" title="New Album" data={newAlbum}/> 
{/* <p>{topAlbum.map((item)=>(<h4>{item.title}</h4>) )}</p>
  <p>{newAlbum.map((item)=>(<h4>{item.title}</h4>) )}</p>
*/}
    </div>
  );
}

export default App;
