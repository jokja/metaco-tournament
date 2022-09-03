var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var env = process.env.NODE_ENV || "development";
var config = require(path.join(__dirname, 'config', 'config.json'))[env];
var sequelize = new Sequelize(config.database, config.username, config.password, config);
 
module.exports = sequelize;