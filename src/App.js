import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';
import Section from './components/Section/Section';


import './App.css';
import { useEffect, useState } from 'react';
import { fetchTopAlbums, fetchNewAlbums, fetchSongs } from './api/api';

function App() {
    const [topAlbum, setTopAlbum] = useState([]);
    const [newAlbum, setNewAlbum] = useState([]);
    const [allSongs, setAllSongs] = useState([]);
    const [filteredSongs, setFilteredSongs] = useState([]);
    const [value, setValue] = useState(0);

    const handleChange = (newvalue)=>{
      setValue(newvalue);
    }

    const filterSongsData = (songs)=>{
      setFilteredSongs(songs);
    }

    const generateSongsData = (value)=>{
      let key;
      if(value===0){
        filterSongsData(allSongs);
        return;
      }
      else if(value===1){
        key = "rock";
      }
      else if(value===2){
        key = "pop";
      }
      else if(value===3){
        key = "jazz";
      }
      else if(value===4){
        key = "blues";
      }

      const filteredres = allSongs.filter((item)=>item.genre.key===key);
      filterSongsData(filteredres);
    }

    const generateAllSongs = async()=>
    {
      try {
        const songsres = await fetchSongs();
        setAllSongs(songsres); 
        setFilteredSongs(songsres);
        console.log("generateSongs", songsres) ;
      } catch (error) {
        console.log("error in generateAllSongs", error);
        return null;
      }
    }

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
      generateSongsData(value);
    }, [value]);


    useEffect(()=>{
      generateTopAlbums();
      generateNewAlbums();
      generateAllSongs();
    }, []);

  return (

    <div className="App"> 

        <Navbar />   
        <Hero />       
          <Section type="album" title="Top Album" data={topAlbum}/> 
          <Section type="album" title="New Album" data={newAlbum}/>
          <div>
      <Section type="song" title="Songs" data={filteredSongs}   value={value} handleChange={handleChange} />
      </div> 
{/* <p>{topAlbum.map((item)=>(<h4>{item.title}</h4>) )}</p>
  <p>{newAlbum.map((item)=>(<h4>{item.title}</h4>) )}</p>
*/}
    </div>
  );
}

export default App;
