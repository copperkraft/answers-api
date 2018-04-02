import { Container } from 'inversify';
import { iocServicesBinder } from './services/ioc-services-binder';

export async function logicInit(container: Container) {
    iocServicesBinder(container);
}