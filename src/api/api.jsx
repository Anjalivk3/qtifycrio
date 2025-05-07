import axios from "axios";
export const backend_Endpoint = "https://qtify-backend-labs.crio.do";

export const fetchTopAlbums = async()=>{
      try {
        const resAlbum = await axios.get(`${backend_Endpoint}/albums/top`);
        //console.log("api file fetchtopalbum",resAlbum.data);
        return resAlbum.data;
      } catch (error) {
        console.log("some error in fetchTopAlbums", error);
        return null;
      }
    }


    export const fetchNewAlbums=async()=>{
      try{
          const newres= await axios.get(`${backend_Endpoint}/albums/new`);
          console.log(newres.data);
          return newres.data;
      }
      catch(error){
          console.log("some error in fetchNewAlbums", error);
          return null;
      }
      
  }

     




  
  



