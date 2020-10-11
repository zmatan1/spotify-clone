import React, { useState, useEffect } from "react";
import "./App.css";
import { getTokenFromUrl } from "./auth/spotifyAuth";
import SpotifyWebApi from "spotify-web-api-js";
import Login from "./components/login/Login";
import Player from "./components/player/Player";
import { useDataLayerValue } from "./data-layer/DataLayer";
import { actions } from "./data-layer/actions";

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: actions.setToken,
        token: _token,
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: actions.setUser,
          user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: actions.setPlaylists,
          playlists,
        });
      });

      spotify.getPlaylist("37i9dQZEVXcOAqoJ1EciQT").then((response) => {
        dispatch({
          type: actions.setDiscoverWeekly,
          discover_weekly: response,
        });
      });
    }
  }, []);

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
