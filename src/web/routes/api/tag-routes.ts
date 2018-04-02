import { Application } from 'express';
import { asyncHandlerWrap } from '../../../helpers/async-handler-wrap';
import { iocContainer } from '../../../helpers/ioc-container';
import { TagController } from '../../controllers/tag.controller';

export function registerTagRoutes(app: Application, baseRoute: string) {
    const tagController = iocContainer.get<TagController>('TagController');
    app.get(baseRoute, asyncHandlerWrap(tagController.getAll.bind(tagController)));
    app.post(baseRoute, asyncHandlerWrap(tagController.create.bind(tagController)));
    app.get(baseRoute + '/:id', asyncHandlerWrap(tagController.getById.bind(tagController)));
    app.delete(baseRoute + '/:id', asyncHandlerWrap(tagController.deleteById.bind(tagController)));
}