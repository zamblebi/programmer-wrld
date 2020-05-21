const express = require('express');
const app = express();

const sequelize = require('./db.js')


app.get('/', (req,res)=> {
    res.send('Hello World')
})


app.listen(3000,() => {
    console.log('Server running on port 3000')
})