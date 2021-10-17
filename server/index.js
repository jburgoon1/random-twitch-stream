const express = require('express')
const cors = require('cors')
const app = express()
const port = +process.env.PORT || 3001;
const userRoutes = require('./routes/user')
const {authenticateJWT} = require('./middleware/auth')


app.use(cors())
app.use(express.json())
app.use(authenticateJWT)
app.use('/user', userRoutes)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})