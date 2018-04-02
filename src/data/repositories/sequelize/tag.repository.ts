import { FindOptions } from 'sequelize';
import { errorConstants } from '../../../helpers/error-constants';
import { TagRepository } from '../interfaces/tag.repository';
import { BaseSequelizeRepository } from './base.repository';
import { AnswersAppSchema } from '../../schema';
import { TagAttribute, TagInstance } from '../../models/tag';
import { injectable } from 'inversify';

@injectable()
export class TagSequelizeRepository extends BaseSequelizeRepository<TagInstance, TagAttribute, AnswersAppSchema> implements TagRepository {
    async getById(id: number): Promise<any> {
        const model = await this.model.findById(id, {
            include: [{
                model: this.schema.Question.model
            }]
        });
        
        if (model) {
            return model.toJSON();
        }
        throw new Error(errorConstants.invalidId);
    }
    async findOne(options: FindOptions<TagAttribute>): Promise<any> {
        const model = await this.model.findOne(Object.assign({
            include: [{
                model: this.schema.Question.model
            }]
        }, options));

        if (model) {
            return model.toJSON();
        }
        throw new Error(errorConstants.invalidId);
    }
}