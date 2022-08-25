const {v4} = require('uuid') //Se importa para crear id

const addTask = async(event)=>{
    
    const {tittle, description} = event.body
    const createdAt = new Date();
    const id = v4();

}

module.exports={addTask}