const express = require('express'); 
const mongoose = require('mongoose');
require('./app/models');
const config = require('./config/app');


const app = express(); 
require('./config/express')(app);
require('./config/routes')(app);

mongoose.connect(config.mongoUri)
.then(() =>app.listen(
    config.appPort,
    () => console.log(`listening on port ${config.appPort}...`)
))
.catch(err => console.error(`Error connecting to mongo: ${config.mongoUri}`));


