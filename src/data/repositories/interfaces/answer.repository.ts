import { BaseRepository } from './base.repository';
import { UserAttribute } from '../../models/user';
import { AnswerAttribute } from '../../models/answer';

export interface AnswerRepository extends BaseRepository<AnswerAttribute> {
    findByUserId(userId: number): Promise<UserAttribute[]>;
}