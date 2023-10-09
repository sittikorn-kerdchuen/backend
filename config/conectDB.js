const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config({ path: './.env' })

mongoose.Promise = global.Promise

const connect = async () => {
   await mongoose.connect(process.env.DB_URI)
        .then(() => console.log('Connect to database successfully'))
        .catch((err) => console.error(err))
}

module.exports = { connect };