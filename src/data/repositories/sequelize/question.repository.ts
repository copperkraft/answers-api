import { BaseSequelizeRepository } from './base.repository';
import { AnswersAppSchema } from 'data/schema';
import { injectable } from 'inversify';
import { QuestionAttribute, QuestionInstance } from 'data/models/question';

@injectable()
export class QuestionSequelizeRepository extends BaseSequelizeRepository<QuestionInstance, QuestionAttribute, AnswersAppSchema> {
    
}