import { Application } from 'express';

export function registerUserRoutes(app: Application, baseRoute: string) {
    app.get(baseRoute, (req, res) => {
        res.send('Welcome to user api\n');
    });
}