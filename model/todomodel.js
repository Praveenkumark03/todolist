const mongoose = require('mongoose')
const user=require('../model/usermodel')
const schema = mongoose.Schema
const addtask=new schema({
                userId:{
                    type:schema.Types.ObjectId,
                    ref:'Users'
                    },
                title:{
                        type:"string",
                        required:true
                      },
                des:{
                            type:"string",
                            required:true
                        }
                    })



const task=mongoose.model("Todo",addtask);



module.exports=task;