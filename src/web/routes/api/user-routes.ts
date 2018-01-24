import { Application } from 'express';
import { iocContainer } from '../../../helpers/ioc-container';
import { UserController } from '../../controllers/user.controller';
import { userJwt } from '../../middlware/user-jwt';

export function registerUserRoutes(app: Application, baseRoute: string) {
    const userController = iocContainer.get<UserController>('UserController');
    app.post(baseRoute, userController.register.bind(userController));
    app.post(baseRoute + '/login', userController.authenticate.bind(userController));
    app.get(baseRoute, userJwt, userController.getCurrent.bind(userController));
    app.get(baseRoute + '/:id', userController.getById.bind(userController));
}