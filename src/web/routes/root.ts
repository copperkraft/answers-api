import { Application } from 'express';
import { registerApiRoutes } from './api/api-root';

export function registerRoutes(app: Application) {
    app.get('/', (req, res) => {
        res.send('Hello world\n');
    });
    
    registerApiRoutes(app, '/api');
}