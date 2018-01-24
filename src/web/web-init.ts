import * as express from 'express';
import { Application } from 'express';
import { Container } from 'inversify';
import bodyParser = require('body-parser');
import { iocControllersBinder } from './controllers/ioc-controllers-binder';
import { registerRoutes } from './routes/root';

export function webInit(container: Container, app: Application): void {
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    
    iocControllersBinder(container);
    registerRoutes(app);
    
    app.use((err: Error, req: express.Request, res: express.Response, next: () => any) => {
        if (err) {
            console.error(err.stack);
            res.status(500).send('Something broke!');
        }
    });
}