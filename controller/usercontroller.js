const controller = require("../service/userservice")
const bcrypt=require('bcrypt')
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
const login =async(req,res)=>{
    try{
        const {email,password}=req.body
    
      const user=await controller.checkuser(email)
    if (!user) {
        throw new Error('user not found')
    }
    const match=await bcrypt.compare(password,user.password)
    if (!match) {
        throw new Error('invalid password') 
    }
    let tokendata={
        id:user._id,
        email:user.email
    }

    const token=await controller.generatetoken(tokendata,'secretkey');
    res.status(200).json({
        status:true,
        token:token
    })
}
    catch(err)
    {
        console.log(err);
    }
}
module.exports={register,login}