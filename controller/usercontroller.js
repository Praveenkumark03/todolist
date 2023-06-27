const controller = require("../service/userservice")

const register =async(req,res)=>{
    try{
    const {email,password}=req.body;
    const user= await controller.registeruser(email,password)
    res.json(user)
}
catch(err)
{
    console.log(err);
}
}
module.exports={register}