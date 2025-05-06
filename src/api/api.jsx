import axios from "axios";
export const backend_Endpoint = "https://qtify-backend-labs.crio.do";

export const fetchTopAlbums = async()=>{
      try {
        const resAlbum = await axios.get(`${backend_Endpoint}/albums/top`);
        //console.log("api file fetchtopalbum",resAlbum.data);
        return resAlbum.data;
      } catch (error) {
        alert("some error in fetchAlbums", error);
        return null;
      }
    }


  
  



