const express = require('express');
const app = express();
const mongoose = require ('mongoose');
const bodypaeser = require('body-parser');
require('dotenv/config');


app.use(bodypaeser.json());
//import Routs
const postRouts = require('./routers/post');


app.use('/post',postRouts)



app.get('/', (req, res) =>{
    res.send("server started");
}
);

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>

console.log("Connected to DB!")

);



app.listen(3000, () => console.log("Server Up and running"));

//connect to mongo-db
// mongoose.connect(process.env.DB_CONNECTION,
// ()=> console.log("connected fucker"));


//server start
// app.listen(3000);
