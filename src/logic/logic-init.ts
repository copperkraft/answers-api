import { Container } from 'inversify';
import { iocServicesBinder } from './services/ioc-services-binder';

export function logicInit(container: Container) {
    iocServicesBinder(container);
}