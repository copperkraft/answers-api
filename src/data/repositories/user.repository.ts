import { BaseRepository } from './base.repository';
import { UserAttribute, UserInstance } from '../models/user';
import { AnswersAppSchema } from '../schema';

export class UserRepository extends BaseRepository<UserInstance, UserAttribute, AnswersAppSchema> {
    
}