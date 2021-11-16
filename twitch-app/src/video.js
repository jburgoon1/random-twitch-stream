import React from 'react'
import "./video.css"

export const Video = ({channel, id}) => {
    
   

    return (
        <div className="stream ml-auto">
        <iframe
        title="twitch-stream"
    src={`https://player.twitch.tv/?channel=${channel}&parent=randomtwitchstream.herokuapp.com&muted=false`}
    height="500"
    width="60%"
    allowFullScreen={true}>
</iframe>

<iframe src={`https://www.twitch.tv/embed/${channel}/chat?parent=randomtwitchstream.herokuapp.com`}
        height="500"
        width="400"
        >
</iframe>

</div>
    )
}

export default Video;

