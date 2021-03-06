import { Application } from 'express';
import { Container } from 'inversify';
import bodyParser = require('body-parser');
import { iocControllersBinder } from './controllers/ioc-controllers-binder';
import { errorHandler } from './middlware/error-handler';
import { registerRoutes } from './routes/root';

export function webInit(container: Container, app: Application): void {
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    
    iocControllersBinder(container);
    registerRoutes(app);
    
    app.use(errorHandler);
}