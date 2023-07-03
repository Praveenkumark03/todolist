const taskmodel=require('../model/todomodel');

class todoService {
    static async todotaskadd(userId,title,des) {
        try {
            const addtask = await taskmodel.create({userId,title,des})
            return addtask;
        }
        catch (err) {
            console.log(err);
        }
    }
    static async gettodotask(userId) {
        try {
            const gettask = await taskmodel.find({userId})
            return gettask;
        }
        catch (err) {
            console.log(err);
        }
    } 
    static async deletetodotask(id) {
        try {
            const deletetodo = await taskmodel.findOneAndDelete({_id:id})
            return deletetodo;
        }
        catch (err) {
            console.log(err);
        }
    }
}

module.exports =todoService;