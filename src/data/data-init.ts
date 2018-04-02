import { DataStorage } from './helpers/data-storage';
import { AnswersAppSchema } from './schema';
import { Container } from 'inversify';
import { bindRepositories } from './repositories/ioc-binder';
import * as config from 'config';

export const dataInit = async (container: Container) => {
    const models: AnswersAppSchema = new AnswersAppSchema();

    const storage = new DataStorage<AnswersAppSchema>(models, config.get('databaseUrl'), 'postgres');
    
    await storage.init(false);
    
    bindRepositories(container, storage);
};