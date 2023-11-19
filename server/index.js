 require('dotenv').config()
 import express from 'express'
 import sequilize from './db'
 import models from './models/models'
 const PORT = process.env.PORT || 5000
 
 const app = express()


 const start = async () => {
    try {
        await sequilize.authenticate()
        await sequilize.synq()

        app.listen(PORT, () => console.log(`server started on port ${PORT}`));
        
    } catch (error) {
        console.log(error)
    }
 }
start()