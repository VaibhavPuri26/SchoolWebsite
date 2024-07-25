import "./videoplayer.css";
import video from "../../assets/school_tour.mp4";
import { useRef } from "react";
const VideoPlayer = ({ playing, setPlaying }) => {
  const player = useRef(null);
  const closePlayer = (e) => {
    if (e.target === player.current) {
      setPlaying(false);
    }
  };
  return (
    <div
      className={`video-player ${playing ? "" : "hide"}`}
      onClick={closePlayer}
      ref={player}
    >
      <video src={video} autoPlay muted controls></video>
    </div>
  );
};

export default VideoPlayer;
