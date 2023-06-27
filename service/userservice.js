const usermodule=require('../model/usermodel')
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
    }}
    module.exports=userservice