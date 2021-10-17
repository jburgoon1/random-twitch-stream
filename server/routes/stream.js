const express = require('express')
const router = express.Router()
const {ensureAdmin, ensureLoggedIn} =require('../middleware/auth')

//gets info on a specific user
router.get('/new',ensureLoggedIn, async function (req, res, next){
    try{
    const username = req.params.username
    const results = User.getByUsername(username)
    return res.json(results.rows[0])
    }catch(e){
        next(e)
    }
})




module.exports = router