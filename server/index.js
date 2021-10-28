const express = require('express')
const cors = require('cors')
const app = express()
const path = require('path');
const port = process.env.PORT || 3001;
const userRoutes = require('./routes/user')
const {authenticateJWT} = require('./middleware/auth')

app.use(express.static(path.resolve(__dirname, '../twitch-app/build')));
app.use(cors())
app.use(express.json())
app.use(authenticateJWT)
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../twitch-app/build', 'index.html'));
// });
app.use('/user', userRoutes)



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})