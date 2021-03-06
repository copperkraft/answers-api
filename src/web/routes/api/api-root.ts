import { Application } from 'express';
import { registerQuestionRoutes } from './question-routes';
import { registerTagRoutes } from './tag-routes';
import { registerUserRoutes } from './user-routes';

export function registerApiRoutes(app: Application, baseRoute: string) {
    app.get(baseRoute, (req, res) => {
        res.send('Welcome to api\n');
    });

    registerUserRoutes(app, baseRoute + '/user');
    registerTagRoutes(app, baseRoute + '/tag');
    registerQuestionRoutes(app, baseRoute + '/question');
}