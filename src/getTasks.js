const AWS = require("aws-sdk"); //Importamos el sdk de aws

const getTasks = async (event) =>{
    //conexion con dynamodb
    const dynamodb = new AWS.DynamoDB.DocumentClient();

    const result = await dynamodb.scan({
        TableName: 'TaskTable'
    }).promise();

    const tasks = result.Items;

    return{
        statysCide: 200,
        body: tasks
    }

}


module.exports={getTasks} 