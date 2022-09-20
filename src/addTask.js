const { v4 } = require("uuid"); //Se importa para crear id
const AWS = require("aws-sdk"); //Importamos el sdk de aws

const addTask = async (event) => {
  //Conexion con la base de datos
  const dynamodb = new AWS.DynamoDB.DocumentClient();

  //Se reciben los datos a traves del event
  const { tittle, description } = JSON.parse(event.body);
  const createdAt = new Date();
  const id = v4(); //se crea el id desde V4 de uuid

  //Creamos el objeto a guardar
  const newTask = {
    id,
    tittle,
    createdAt,
    description
  }

  await dynamodb.put({
    TableName: "TaskTable", //Misma tabla creada en el archivo yml
    Item: newTask //pasamos el objeto a guardar
  }).promise();

  return{
    statusCode: 200,
    body: JSON.stringify(newTask) //Retornamos status 200 y el objeto creado
  }
};

module.exports = { addTask };
