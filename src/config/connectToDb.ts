import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const uri = process.env.URI;

if(!uri){
    throw new Error("A Varaivel de Ambiente URI nao esta definida.")
}

const connectToDb = async () =>{
    try{
        await mongoose.connect(uri, {
            dbName:'splDB',
            serverSelectionTimeoutMS: 5000
        });

        console.log("Banco de Dados Conectado!")
    }catch (error){
        console.log(`Erro ao se conectar ao banco de dados! ${error}`)
    }
}

export default connectToDb;