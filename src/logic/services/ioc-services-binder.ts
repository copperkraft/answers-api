import { Container } from 'inversify';
import { QuestionService } from './question.service';
import { TagService } from './tag.service';
import { UserService } from './user.service';

export function iocServicesBinder(container: Container) {
    container.bind<UserService>('UserService').to(UserService);
    container.bind<QuestionService>('QuestionService').to(QuestionService);
    container.bind<TagService>('TagService').to(TagService);
}