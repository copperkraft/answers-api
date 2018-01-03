import { BaseSequelizeRepository } from './base.repository';
import { UserAttribute, UserInstance } from 'data/models/user';
import { AnswersAppSchema } from 'data/schema';
import { injectable } from 'inversify';
import { UserRepository } from '../interfaces/user.repository';
import { Encryption } from '../../../helpers/encryption-helper';

@injectable()
export class UserSequelizeRepository extends BaseSequelizeRepository<UserInstance, UserAttribute, AnswersAppSchema> implements UserRepository {
    
}