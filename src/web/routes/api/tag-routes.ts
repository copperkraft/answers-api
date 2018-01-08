import { Application } from 'express';
import { iocContainer } from '../../../helpers/ioc-container';
import { TagController } from '../../controllers/tag.controller';

export function registerTagRoutes(app: Application, baseRoute: string) {
    const tagController = iocContainer.get<TagController>('TagController');
    app.get(baseRoute, tagController.getAll.bind(tagController));
    app.post(baseRoute, tagController.create.bind(tagController));
    
    app.get(baseRoute + '/:id', tagController.getById.bind(tagController));
}