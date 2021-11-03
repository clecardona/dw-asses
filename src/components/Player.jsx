//NPM Packages
import YouTube from "react-youtube";
import getYouTubeID from "get-youtube-id";

//Local Files
import { useState } from "react";

export default function Player({ video, autoplay, controls }) {
  const videoId = getYouTubeID(video);

  return (
    <div className="video-container">
      <iframe
        //src={
        //`https://www.youtube.com/embed/${video}?autoplay=1&mute=1&showinfo=0&controls=0` /* ?autoplay=1&mute=1&showinfo=0&controls=0 */
        //}
        src={
          `https://www.youtube.com/embed/${videoId}?autoplay=${autoplay}&mute=${autoplay}&showinfo=0$controls=${controls}` /* ?autoplay=1&mute=1&showinfo=0&controls=0 */
        }
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="video"
      />
    </div>
  );
}
