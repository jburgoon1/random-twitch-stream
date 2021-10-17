const db = require('./db')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {SECRET_KEY, BCRYPT_WORK_FACTOR} = require('./config')


class User {
    static async getByUsername(username){
        const result = await db.query("SELECT username, name, email FROM random WHERE username = $1", [username])
        return result.rows[0]
    }
    
    static async signup(username, name, email, password){
        const hashedPW = await bcrypt.hash(password, BCRYPT_WORK_FACTOR)
        const result = await db.query("INSERT INTO users (username, name, email, password) VALUES ($1, $2, $3, $4) RETURNING username", [username, name, email, hashedPW])
        return result.rows[0]
    }

    static async login(username, password){
        const result = await db.query("SELECT username, password FROM  users WHERE username = $1  ", [username])
        const user = result.rows[0]

        if(user){
            if(await bcrypt.compare(password, user.password)===true){
               delete user.password
                return user
            }
        }
    }

    static async delete(username){
        const result = await db.query("")
    }
}

module.exports = User