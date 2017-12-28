import { BaseSequelizeRepository } from './base.repository';
import { UserAttribute, UserInstance } from 'data/models/user';
import { AnswersAppSchema } from 'data/schema';
import { injectable } from 'inversify';

@injectable()
export class UserSequelizeRepository extends BaseSequelizeRepository<UserInstance, UserAttribute, AnswersAppSchema> {
    
}