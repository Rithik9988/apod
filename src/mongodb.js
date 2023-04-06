const mongoose = require("mongoose")

mongoose.connect('mongodb+srv://rithik4123:rithik4123@cluster0.wcuz2pn.mongodb.net/test',)
  .then(() => {
    console.log('Connected to database!');
    
  })
  .catch(err => {
    console.error('Error connecting to database:', err.message);
  });

const LogInSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    } 
})
 

const collection=new mongoose.model("logincollection",LogInSchema)
module.exports=collection