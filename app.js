//require express,mongoosde,Body-parser
const e = require('express')
const m =require('mongoose')
const bodyparser=require('body-parser')
//const r=require('./route/userrouter')r
const router = require('./route/userrouter')
const todorout=require('./route/todoroute')
//app express
const app=e()
app.use(bodyparser.json())
app.use (router)
app.use(todorout)
//database connction
m.connect("mongodb+srv://praveenrainak:mypassword@cluster2.pafs1de.mongodb.net/akash?retryWrites=true&w=majority")
.then((result)=>{
console.log("Database connected");
})
.catch((err)=>{
    console.log(err);
})

app.get('/',(req,res)=>{
    res.end("hello world");
})
const port=2001;

app.listen(port,()=>
{
    console.log("app listening port http://localhost:"+port);
})
