const express = require('express')
const app = express();
const sequelize = require('./database')
const cors = require('cors');

//models
// var models = require("./models");

// routes
const initRoutes = require("./routes");

//Sync Database
sequelize.sync().then(function() {
  console.log('connected to database')
}).catch(function(err) {
  console.log(err)
});

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())

app.use(express.urlencoded({ extended: true }));
initRoutes(app);

let port = 8000;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`)
});