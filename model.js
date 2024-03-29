const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone_number:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const User=new mongoose.model('Login_page',userSchema);

module.exports=User;
