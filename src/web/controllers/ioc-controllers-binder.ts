import { Container } from 'inversify';
import { TagController } from './tag.controller';

export function iocControllersBinder(container: Container) {
    container.bind<TagController>('TagController').to(TagController);
}