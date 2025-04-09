import express, {Application} from 'express';
import cors from 'cors';
import connectToDb from './config/connectToDb';
import router from './routes/routes';

class App{
    private server: Application;
    public port: number | string;

    constructor(){
        this.server = express();
        this.port = process.env.PORT || 3001;
        connectToDb();

        this.middleware();
        this.routers();
    }

    private middleware(){
        this.server.use(express.json());
        this.server.use(cors());
    }

    private routers(){
        this.server.use('/api', router);
    }

    public start(){
        this.server.listen(this.port, ()=>{
            console.log(`Servidor Typescript rodando http://localhost:${this.port}/api`);
        });
    }
}

export default App;