import React from "react";
import "./AlbumData.css";
import "./Albums.css";
import { useState, useEffect} from 'react'
const defaultImage =
  "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg";
 
const AlbumData = ({id}) => {
      const [albumInfo, setAlbumInfo] = useState("");

      const getAlbumInfo = (id) => {
        fetch(`http://localhost:3001/albums/${id}`)
        .then((data) => data.json())
        .then((result) => setAlbumInfo(result))
        .catch(console.log("er")); 
      }

      useEffect(() => {
        getAlbumInfo();
      }, []);
      getAlbumInfo(id);
      console.log(albumInfo);
      return (
        <div>
          <h1>Album Data</h1>
          <div className="album" >
            <div className="image-container">
             <img src={albumInfo.image || defaultImage} alt="Album cover" />
            </div>
            <div className="album-info">
              <h2>{albumInfo.title}</h2>
              <h3>{albumInfo.author}</h3>
            </div>
          </div>
        </div>
      );        
    };
  
  export default AlbumData;
  

  // {id: 3, title: "Chalga", author: "Painer", 
  // image: "https://smile0n.com/wp-content/uploads/2016/08/ala-bala-batkata.jpg", 
  //       songs: Array(3)}