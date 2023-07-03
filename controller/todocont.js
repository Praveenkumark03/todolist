const todoService=require('../service/todoservice')
const taskadd = async (req, res) => {
    try {
        const {userId,title,des} = req.body;
        const addtask = await todoService.todotaskadd(userId,title,des)
        //console.log(addtask);
        res.json(addtask);
    } catch (err) {
        console.log(err);
    }
}    
const gettodo = async (req, res) => {
    try {
        const {userId} = req.body;
        const gettask = await todoService.gettodotask(userId)
        //console.log(addtask);
        res.json(gettask);
    } catch (err) {
        console.log(err);
    }
}  
const deletetodo= async (req, res) => {
    try {
        const {id} = req.body;
        const deletetask = await todoService.deletetodotask(id)
        //console.log(addtask);
        res.json(deletetask);
    } catch (err) {
        console.log(err);
    }
}  

module.exports = {
    taskadd,
    gettodo,
    deletetodo
}