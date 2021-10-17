import '../Signup.css'
import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import api from '../api'

const SignUp = ({login}) =>{
    const INITIAL_STATE = {
        username:'',
        name:"",
        email:"",
       password:''
    }
    const history = useHistory();
    const [formData, setFormData] = useState(INITIAL_STATE)
   
   

    const handleChange = (e) =>{
        const {name, value} = e.target
        setFormData((data) => ({
            ...data,
            [name]: value,
        }))
    }

      function handleSubmit(e) {
        e.preventDefault();
        // addUser(formData)
        register(formData)
        alert('Signed up!')
        setFormData(INITIAL_STATE)
        history.push('/')
      }

      const register = async (data) =>{
          const res = await api.register(data)
          console.log(res)
          login(res)
      }
    return(
        <>
        <h1>Sign Up</h1>
        <div className="signUpDiv">
        <form className="signUpForm" onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" onChange={handleChange}></input>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" onChange={handleChange}></input>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" onChange={handleChange}></input>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" onChange={handleChange}></input>
            
            <button className="signupsubmit">Submit</button>
        </form>
        </div>
        </>
    )
}

export default SignUp;

