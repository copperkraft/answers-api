import { BaseRepository } from './base.repository';
import { QuestionAttribute } from 'data/models/question';

export interface QuestionRepository extends BaseRepository<QuestionAttribute> {
    createQuestion(info: QuestionAttribute, userId: number, tags: number[]): Promise<any>;
}