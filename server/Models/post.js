const mongoose = require("mongoose");

const postSchma = mongoose.Schema({
  name: {
     type: String, 
     require: true ,
    },
  password:{ type: String, 
    require: true ,
  },
  date: { 
    type: Date,
    default:Date.now
  },
});

module.exports=mongoose.model('Posts',postSchma);