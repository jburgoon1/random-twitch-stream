import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NavBar from './NavBar'
import Home from './pages/home'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
import Random from './pages/Random'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import axios from 'axios'
import { useEffect } from 'react';
import {appKey, secret} from './config'
import jwt from 'jsonwebtoken'
function App() {
  const [user, setUser] = useState()
  const [token, setToken] = useState()
  const [apiToken, setApiToken] = useState()

  const getApiToken = async () =>{
    console.log(appKey, secret)
    const newToken = await axios.post(`https://id.twitch.tv/oauth2/token?client_id=${appKey}&client_secret=${secret}&grant_type=client_credentials`)
    console.log(newToken.data)
    setApiToken(newToken.data.access_token)
}

  const getToken = () =>{
    const savedToken = localStorage.getItem('token')
    if(savedToken){
    logInUser(savedToken)
    }
  }
  const logInUser = (data) =>{
    setToken(data)
    const username = jwt.decode(data).username
    console.log(username)
    setUser(username)
  }
  const logout = () =>{
    setUser([])
    setToken('')
    localStorage.clear()
  }

  useEffect(()=>{
    getToken()
  },[])
  return (
    <div className="App">
      <BrowserRouter>
      
        <NavBar user={user} token={token} logout={logout}/>
      
      <Switch>
      
    
    <Route path="/login">
      <LogIn login={logInUser}/>
    </Route> 
    <Route path="/signup">
       <SignUp login={logInUser}/>
    </Route>
    <Route path='/logout' logout={logout} />
    <Route path="/:username">
      <Profile user={user}/>
    </Route>
   
    <Route path="/random">
      <Random apiToken={apiToken}/>
    </Route>
    <Route path="/">
        <Home/>
      </Route>
    </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
