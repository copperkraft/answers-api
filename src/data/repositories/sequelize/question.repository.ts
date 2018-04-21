import { QuestionRepository } from '../interfaces/question.repository';
import { BaseSequelizeRepository } from './base.repository';
import { AnswersAppSchema } from 'data/schema';
import { injectable } from 'inversify';
import { QuestionAttribute, QuestionInstance } from 'data/models/question';
import { errorConstants } from '../../../helpers/error-constants';

@injectable()
export class QuestionSequelizeRepository 
    extends BaseSequelizeRepository<QuestionInstance, QuestionAttribute, AnswersAppSchema> 
    implements QuestionRepository {
    async getById(id: number): Promise<any> {
        const model = await this.model.findById(id, {
            include: [
                {
                    model: this.schema.Tag.model
                },
                {
                    model: this.schema.User.model
                }
            ]
        });

        if (model) {
            return model.toJSON();
        }
        throw new Error(errorConstants.invalidId);
    }

    async createQuestion(info: QuestionAttribute, userId: number, tags: number[]): Promise<any> {
        const newModel = await this.model.create(info);
        await Promise.all([
            newModel.setUser(userId),
            newModel.setTags(tags)
        ]);
        return newModel.toJSON();
    }
}