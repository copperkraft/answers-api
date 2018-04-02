import { Application } from 'express';
import { asyncHandlerWrap } from '../../../helpers/async-handler-wrap';
import { iocContainer } from '../../../helpers/ioc-container';
import { UserController } from '../../controllers/user.controller';
import { userJwt } from '../../middlware/user-jwt';

export function registerUserRoutes(app: Application, baseRoute: string) {
    const userController = iocContainer.get<UserController>('UserController');
    app.post(baseRoute, asyncHandlerWrap(userController.register.bind(userController)));
    app.post(baseRoute + '/login', asyncHandlerWrap(userController.authenticate.bind(userController)));
    app.get(baseRoute, userJwt, asyncHandlerWrap(userController.getCurrent.bind(userController)));
    app.get(baseRoute + '/:id', asyncHandlerWrap(userController.getById.bind(userController)));
}