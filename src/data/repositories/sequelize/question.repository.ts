import { QuestionRepository } from '../interfaces/question.repository';
import { BaseSequelizeRepository } from './base.repository';
import { AnswersAppSchema } from 'data/schema';
import { injectable } from 'inversify';
import { QuestionAttribute, QuestionInstance } from 'data/models/question';

@injectable()
export class QuestionSequelizeRepository 
    extends BaseSequelizeRepository<QuestionInstance, QuestionAttribute, AnswersAppSchema> 
    implements QuestionRepository {
    async getById(id: number): Promise<any> {
        const question = await this.model.findById(id);
        if (question) {
            return question;
        }
        throw new Error('invalid id');
    }
}