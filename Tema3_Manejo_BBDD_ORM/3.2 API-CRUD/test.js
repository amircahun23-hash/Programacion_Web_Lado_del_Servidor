import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://amircahun23_db_user:TU_PASSWORD_REAL@cluster0.rjsyrok.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(uri);

try {
  await client.connect();
  console.log('Conectado correctamente');
} catch (err) {
  console.error(err);
}