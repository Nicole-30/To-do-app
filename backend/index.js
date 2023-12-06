const express = require('express')
const app = express('')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()
app.use(express.json())
app.use(express.urlencoded())


const server = () => {
    mongoose.set('strictQuery', false);
    mongoose.connect(process.env.MONGO_URI, (errr) => {
        if (errr) {
            return console.log('Failed to connect to mongoDB', errr);
        }
        console.log('Connected to DB');
    })

    app.listen(process.env.PORT, () => console.log(`server is runnning on ${process.env.PORT}`))

}

server()