import { Container } from 'inversify';
import { QuestionService } from './question.service';
import { UserService } from './user.service';

export function iocServicesBinder(container: Container) {
    container.bind<UserService>('UserService').to(UserService);
    container.bind<QuestionService>('QuestionService').to(QuestionService);
}