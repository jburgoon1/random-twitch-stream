const express = require('express')
const User = require('../userModule')
const router = new express.Router()
const {ensureAdmin, ensureLoggedIn} =require('../middleware/auth')
const { createToken } = require('../tokens')

//gets info on a specific user
router.get('/:username',ensureLoggedIn, async function (req, res, next){
    try{
    const username = req.params.username
    const results = await User.getByUsername(username)
    return res.json(results.rows[0])
    }catch(e){
        next(e)
    }
})
//lets a new user sign up to the site
router.post('/signup', async function (req, res, next){
    try{
        const {username, name, email, password} = req.body
        const result = await User.signup(username, name, email, password)
        const token = createToken(result)
        return res.json({message:`Welcome ${result.username}`, token})
    }catch(e){
        next(e)
    }
})
//lets an existing user sign into the site
router.post('/login', async function (req,res,next){
    try{
        const {username, password} = req.body
        const result = await User.login(username, password)
        const token = createToken(result)

        return res.json({message:`Welcome back ${result.username}`, token})
    }catch(e){
        next(e)
    }
})
//deletes a user from the database
router.delete('/:username', ensureLoggedIn, ensureAdmin, async function (req,res,next){
    try{
        const user = req.params.username
        const result = await User.delete(user)
        return res.json({message:`Sad to see you go ${result.username}`})
    }catch(e){
        next(e)
    }
})




module.exports = router