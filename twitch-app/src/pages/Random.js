import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Container, Button} from 'react-bootstrap'
// import '../random.css'
import {appKey, secret, accessToken} from '../config'
import Video from '../video'

const Random = ({apiToken}) =>{
const [stream, setStream] = useState()
const [games, setGames] = useState()
const [isLoading, setIsLoading] = useState(null)
const [selectGame, setSelectGame] = useState({'name':null})
const [gameStreams,setGameStreams] = useState();



const handleSelect = (e) =>{
        const {name, value} = e.target
        setSelectGame(() => ({
            [name]: value
        }))
}

const randomStream = (e) =>{
    e.preventDefault()
    setIsLoading(true)
    let random = gameStreams[Math.floor(Math.random()*gameStreams.length) - 1 ]
    setIsLoading(false)
    setStream(random)

    
}

const getGames = async () => {
    const game = await axios.get("https://api.twitch.tv/helix/games/top?first=100", {
        headers:{
            'Client-Id':appKey,
            'Authorization': `Bearer ${accessToken}`
        }
    })
    setGames(game.data)
} 

const getStreams = async (e) =>{
    e.preventDefault()
const streams = await axios.get(`https://api.twitch.tv/helix/streams?game_id=${selectGame.game}&first=100`,{headers:{
    'Client-Id':appKey,
    'Authorization': `Bearer ${accessToken}`
}
})

setGameStreams(streams.data.data)
}
useEffect(()=>{
    getGames()
},[])
return (
    <>
    <h1>Random Stream</h1>
    {!games ?
    <h1>Loading...</h1>
    :
    <Container className="text-center">
    <form onSubmit={getStreams}>
    <select name="game" onChange={handleSelect}>
    {games.data.map(g=>(
        <option name="name" value={`${g.id}`}>{g.name}</option>
    ))}
    </select>
    <Button type="submit">Get All Streams</Button>
    </form>
    {!gameStreams?
    null
    :
    <form onSubmit={randomStream}>
        <Button type="submit" className="btn btn-success">Get Random Streams</Button>
    </form>
}
    </Container>
}
{!stream?
<h1>Select a game you would like to watch!</h1>
:
<>
<h1>{stream.user_name}</h1>
    <Video channel={stream.user_name}/>
</>
}
    </>
)
}

export default Random;