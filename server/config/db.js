const {config} = require('./config');
const Sequelize = require('sequelize');
var sequelize =  new Sequelize(config.database,config.username,config.password,{
    host: config.host,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    },
    define:{
        timestamps:false
    }
});
module.exports = {
    sequelize
}