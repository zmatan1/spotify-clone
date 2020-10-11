import React from "react";
import "./Player.css";
import Sidebar from "../player-sidebar/Sidebar";
import Body from "../player-body/Body";
import Footer from "../player-footer/Footer";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body spotify={spotify} />
      </div>

      <Footer />
    </div>
  );
}

export default Player;
