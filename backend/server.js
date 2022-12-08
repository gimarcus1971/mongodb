require('dotenv').config()
require('./config/database')

const express = require('express')
const app = express()


const PORT = 4000


app.set('port',PORT)


app.get('/',(req , res)=> {
    res.send('SERVIDOR CREADO!')
})


app.listen(PORT, () => {
    console.log('SERVIDOR CORRIENDO EN PUERTO: '+app.get('port'))
})
