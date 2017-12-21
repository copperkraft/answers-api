import * as express from "express";
import * as config from "config";
import {
    SequelizeStorageManager,
    StorageManager
} from './data/storage/storage';

const PORT = parseInt(config.get('port'),10) || 3001;
const HOST = config.get('host').toString();

const app = express();
app.get('/', (req, res) => {
    res.send('Hello world\n');
});

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`); 
});

const storage: StorageManager = new SequelizeStorageManager();
