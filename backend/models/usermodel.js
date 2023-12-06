const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  tel: {
    type: String,
    required: true,
    default: '0'
  },
  status:{
    type: String,
    required: true
  },
  color:{
    type: String,
    required: true
  },
  sex:{
    type:String,
    required:true
  },
  city:{
    type:String,
    required:true
  },
  hubby:{
    type:String,
    required:true
  }
});

const Usermodel = mongoose.model('User', userSchema);
module.exports = Usermodel;