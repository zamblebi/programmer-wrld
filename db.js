const Sequelize = require('sequelize')

const sequelize = new Sequelize('progwrld-db', 'root','root', {
    host: 'localhost',
    dialect: 'mysql',
})

 sequelize.authenticate()
    .then(()=>{
        console.log('Connection has been etablished successfully')
    })
    .catch(err => {
        console.error('Unable to connect database : ', err)
    })



    module.exports = sequelize
