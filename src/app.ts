import * as express from 'express';
import * as config from 'config';
import { iocContainer } from './helpers/ioc-container';
import { dataInit } from './data/data-init';
import { logicInit } from './logic/logic-init';
import { UserService } from './logic/services/user.service';

const PORT = parseInt(config.get('port'), 10) || 3001;
const HOST = 
    config.get(
        'host'
    ).toString();

const app = express();
app.get('/', (req, res) => {
    res.send('Hello world\n');
});

const init = async () => {
    await dataInit(iocContainer);
    logicInit(iocContainer);
    
    const userService = iocContainer.get<UserService>('UserService');
    
    await userService.register({email: 'alex@test.com', name: 'Alex', password: '12345678'});
    const result = await userService.authorize({email: 'alex@test.com', password: '12345678'});
    if (result) {
        console.log('success');
    }
};

init().then(() => {
    app.listen(PORT, HOST, () => {
        console.log(`Running on http://${HOST}:${PORT}`); 
    });
});
