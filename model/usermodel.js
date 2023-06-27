const mongo=require('mongoose')
const schema=mongo.Schema

const userschema=new schema({
    email:{
        type:"string",
        required:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:"string",
        required:true
    }
})
const usermodule=mongo.model('details',userschema)
module.exports=usermodule