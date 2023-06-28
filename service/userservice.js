const usermodule=require('../model/usermodel')
const t=require('jsonwebtoken')
class userservice
    {
    static async registeruser(email,password){
try{
    const create = await usermodule.create({email,password})
    return create
}
catch(err)
{
    console.log(err);
}
    }
static async checkuser(email)
{
    try{
        return await usermodule.findOne({email})
    }
    catch(err)
    {
        console.log(err);
    }
}
static async generatetoken(tokendata,key)
{
    try{
        return await t.sign(tokendata,key,{expiresIn:'2h'})
    }
    catch(err)
    {
        console.log(err);
    }
}

    }
    module.exports=userservice