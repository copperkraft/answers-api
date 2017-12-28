import { BaseSequelizeRepository } from './base.repository';
import { AnswersAppSchema } from '../../schema';
import { TagAttribute, TagInstance } from '../../models/tag';
import { injectable } from 'inversify';

@injectable()
export class TagSequelizeRepository extends BaseSequelizeRepository<TagInstance, TagAttribute, AnswersAppSchema> implements TagSequelizeRepository {
    
}