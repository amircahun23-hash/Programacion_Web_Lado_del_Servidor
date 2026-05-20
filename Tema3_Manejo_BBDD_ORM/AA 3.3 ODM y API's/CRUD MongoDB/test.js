import { MongoClient } from 'mongodb';

const uri = "mongodb://amircahun23_db_user:mhQRIvwDuDBAhJrO@ac-yap7zsc-shard-00-00.rjsyrok.mongodb.net:27017,ac-yap7zsc-shard-00-01.rjsyrok.mongodb.net:27017,ac-yap7zsc-shard-00-02.rjsyrok.mongodb.net:27017/?ssl=true&replicaSet=atlas-mhd6c5-shard-0&authSource=admin&appName=Cluster0";

const client = new MongoClient(uri);

async function run() {

    try {

        await client.connect();

        console.log("Conectado a MongoDB Atlas");

    } catch (error) {

        console.log(error);

    }

}

run();