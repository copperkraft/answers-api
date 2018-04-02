import { Application } from 'express';
import { asyncHandlerWrap } from '../../../helpers/async-handler-wrap';
import { iocContainer } from '../../../helpers/ioc-container';
import { QuestionController } from '../../controllers/question.controller';
import { userJwt } from '../../middlware/user-jwt';

export function registerQuestionRoutes(app: Application, baseRoute: string) {
    const questionController = iocContainer.get<QuestionController>('QuestionController');
    app.get(baseRoute, asyncHandlerWrap(questionController.getAll.bind(questionController)));
    app.post(baseRoute, asyncHandlerWrap(questionController.create.bind(questionController)));
    app.get(baseRoute + '/:id', userJwt, asyncHandlerWrap(questionController.getById.bind(questionController)));
    app.put(baseRoute + '/:id', userJwt, asyncHandlerWrap(questionController.update.bind(questionController)));
    app.delete(baseRoute + '/:id', userJwt, asyncHandlerWrap(questionController.deleteById.bind(questionController)));
}