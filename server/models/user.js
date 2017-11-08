const {mongoose} = require('../db/mongoose');
const User = mongoose.model('User',{
  email:{
    type:String,
    required:true,
    trim:true,
    minLength:1
  },
  password:{
    type:String,
    required:true,
    trim:true,
    minLength:6
  }
});

module.exports ={
  User
}
