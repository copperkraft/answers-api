import * as express from "express";
import * as config from "config";
import { iocContainer } from './helpers/ioc-container';
import { dataInit } from './data/data-init';
import { TagRepository } from './data/repositories/interfaces/tag.repository';

const PORT = parseInt(config.get('port'),10) || 3001;
const HOST = config.get('host').toString();

const app = express();
app.get('/', (req, res) => {
    res.send('Hello world\n');
});

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`); 
});

(async () => {
    await dataInit(iocContainer);
    
    const tagRepo = iocContainer.get<TagRepository>('TagRepository');
    const tag = await tagRepo.create({title: 'Angular'});
    console.log(tag);
})();
