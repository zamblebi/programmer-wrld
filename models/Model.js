const Sequelize = require('sequelize')

const Model = Sequelize.Model;

class User extends Model{}

User.init({
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
}, {
 sequelize,
 modelName: 'user'
})