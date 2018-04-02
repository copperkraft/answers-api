import { QuestionRepository } from '../interfaces/question.repository';
import { BaseSequelizeRepository } from './base.repository';
import { AnswersAppSchema } from 'data/schema';
import { injectable } from 'inversify';
import { QuestionAttribute, QuestionInstance } from 'data/models/question';

@injectable()
export class QuestionSequelizeRepository 
    extends BaseSequelizeRepository<QuestionInstance, QuestionAttribute, AnswersAppSchema> 
    implements QuestionRepository {

    async createByUser(info: QuestionAttribute, userId: number): Promise<any> {
        const newModel = await this.model.create(info);
        await newModel.setUser(userId);
        return newModel.toJSON();
    }
}