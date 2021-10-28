import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import ReactTwitchEmbedVideo from "react-twitch-embed-video"
import "./video.css"
export const Video = ({channel, id}) => {
    
   

    return (
        <div className="stream">
        <iframe
        title="twitch-stream"
    src={`https://player.twitch.tv/?channel=${channel}&parent=https://randomtwitchstream.herokuapp.com/random&muted=false`}
    height="500"
    width="600"
    allowFullScreen={true}>
</iframe>
<iframe src={`https://www.twitch.tv/embed/${channel}/chat?parent=https://randomtwitchstream.herokuapp.com/random`}
        height="500"
        width="250">
</iframe>
</div>
    )
}

export default Video;

