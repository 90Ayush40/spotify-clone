
import { useEffect, useState } from 'react';
import './App.css';
import Login from "./Login";
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";

const spotify = new SpotifyWebApi(); 

function App() {

  // state is used to define variable in react(We use state hooks in functional component)

  const [token, setToken] = useState(null);

  // UseEffect runs the code on a given condition 
  
  useEffect(() => {
    // code...
    const hash = getTokenFromUrl();
    window.location.hash = "";

    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        console.log("person", user);
      })
    }

    console.log("I have a token >>>", token);

  }, []);



  return (
    <div className="app">
      {
        token ? <Player /> : <Login />
      }
      {/* lOgin page */}
    </div>
  );
}

export default App;
