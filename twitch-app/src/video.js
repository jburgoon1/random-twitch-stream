import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import ReactTwitchEmbedVideo from "react-twitch-embed-video"
import {Container, Row, Col} from 'react-bootstrap'
import "./video.css"
export const Video = ({channel, id}) => {
    
   

    return (
        <Container fluid="md">
            <Row>
                
        <div className="stream ">
            <Col md="auto">
        <iframe
        title="twitch-stream"
    src={`https://player.twitch.tv/?channel=${channel}&parent=randomtwitchstream.herokuapp.com&muted=false`}
    height="500"
    width="600"
    allowFullScreen={true}>
</iframe>
</Col>
<Col md="auto">
<iframe src={`https://www.twitch.tv/embed/${channel}/chat?parent=randomtwitchstream.herokuapp.com`}
        height="500"
        width="400">
</iframe>
</Col>
</div>
</Row>
</Container>
    )
}

export default Video;

