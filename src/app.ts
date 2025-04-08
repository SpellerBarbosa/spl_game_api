import express, {Application} from 'express';
import cors from 'cors';
import connectToDb from './config/connectToDb';

class App{
    private server: Application;
    public port: number | string;

    constructor(){
        this.server = express();
        this.port = process.env.PORT || 3001;
        connectToDb();

    }

    private middleware(){
        this.server.use(express.json());
        this.server.use(cors());
    }

    private routers(){}

    public start(){
        this.server.listen(this.port, ()=>{
            console.log(`Servidor Typescript rodando http://localhost:${this.port}`)
        })
    }
}

export default App;