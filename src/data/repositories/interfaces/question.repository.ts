import { BaseRepository } from './base.repository';
import { QuestionAttribute } from 'data/models/question';

export interface QuestionRepository extends BaseRepository<QuestionAttribute> {
    createByUser(info: QuestionAttribute, userId: number): Promise<any>;
}