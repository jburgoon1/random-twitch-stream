import '../Login.css'
import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import api from '../api'

const LogIn = ({login}) =>{
    const INITIAL_STATE = {
        username:'',
       password:''
    }
    const history = useHistory();
    const [formData, setFormData] = useState(INITIAL_STATE)
   
   
console.log(formData)
    const handleChange = (e) =>{
        const {name, value} = e.target
        setFormData((data) => ({
            ...data,
            [name]: value,
        }))
    }

    

      async function handleSubmit(e) {
        e.preventDefault();
        const result = await api.login(formData)
        console.log(result)
        login(result)
        history.push('/')
      }
    return(
        <>
        <h1>Log In</h1>
        <div className="logInDiv">
        <form className="logInForm" onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" onChange={handleChange}></input>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" onChange={handleChange}></input>
            
            <button className="loginsubmit">Submit</button>
        </form>
        </div>
        </>
    )
}

export default LogIn;

