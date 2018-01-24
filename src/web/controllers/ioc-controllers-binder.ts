import { Container } from 'inversify';
import { TagController } from './tag.controller';
import { UserController } from './user.controller';

export function iocControllersBinder(container: Container) {
    container.bind<TagController>('TagController').to(TagController);
    container.bind<UserController>('UserController').to(UserController);
}