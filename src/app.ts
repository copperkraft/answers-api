import * as express from 'express';
import * as config from 'config';
import { iocContainer } from './helpers/ioc-container';
import { dataInit } from './data/data-init';
import { logicInit } from './logic/logic-init';
import { TagService } from './logic/services/tag.service';
import { webInit } from './web/web-init';

const PORT = parseInt(config.get('port'), 10) || 3001;
const HOST = 
    config.get(
        'host'
    ).toString();

const app = express();

const init = async () => {
    await dataInit(iocContainer);
    await logicInit(iocContainer);
    webInit(iocContainer, app);
};

init().then(() => {
    app.listen(PORT, HOST, () => {
        console.log(`Running on http://${HOST}:${PORT}`); 
    });
});