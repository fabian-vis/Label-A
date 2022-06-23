import React from "react";
import axios from 'axios'
import { useState, useEffect } from 'react';

import { Link, useNavigate } from "react-router-dom";
  
const Home = (props) => {
  const navigate = useNavigate()
    const openprofile = (id) => {
      navigate("/detail", {
        state: {
          id: "bruv"
        }
      })
    }
  const url = 'http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=cher&api_key=d732731be2f5f0ec4b10e5a3607d7090&format=json'
  // http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=d732731be2f5f0ec4b10e5a3607d7090&artist=Cher&album=Believe&format=json
  const [album, setAlbum] = useState(null)

  useEffect(() => {
    axios.get(url).then(response => {
      setAlbum(response.data)
    })
  }, [url])
  if(album){
    return (
      <div className="App">
        <header className="App-header">

          {album.topalbums.album.map((item) => (
            <>
            <p key={item.name}>{item.name} </p>
            <img src={item.image[3]['#text']} alt="album cover"/>
            <Link to="/detail" state={{id: "bruv"}}>Detail</Link>
            <button onClick={openprofile}>Open</button>
           </>
        ))}
        </header>
      </div>
    )
  }
  else {
    console.log("no albums");
  }
}
    // return (
    //     <div>
    //       <h1>Home Page</h1>
    //       <br />
    //       <ul>
    //         <li>
    //           <Link to="/">Home</Link>
    //         </li>
    //         <li>
    //           <Link to="/detail">Detail</Link>
    //         </li>
    //       </ul>
    //     </div>
    //   );
    // };
  
export default Home;