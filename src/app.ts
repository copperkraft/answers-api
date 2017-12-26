import * as express from "express";
import * as config from "config";
import { DbStorage } from './data/storage';

const PORT = parseInt(config.get('port'),10) || 3001;
const HOST = config.get('host').toString();

const app = express();
app.get('/', (req, res) => {
    res.send('Hello world\n');
});

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`); 
});

const storage: DbStorage = new DbStorage('postgresql://postgres:123456@localhost/answers','postgres');

storage.init().then(() => {
    console.log('connected');
});
