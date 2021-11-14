const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name:{
    type:String,
    required:true
},
rollno:{
   type:String,
   required:true
},
gender:{
   type:String,
   required:true,
   
},
department:{
   type:String,
   required:true
},
year:{
   type:String,
   required:true
},
num:{
   type:Number,
   required:true
},
});

const stdModal = mongoose.model("student", schema);

module.exports = stdModal;
