import { BaseRepository } from './base.repository';
import { AnswersAppSchema } from '../schema';
import { TagAttribute, TagInstance } from '../models/tag';

export class TagRepository extends BaseRepository<TagInstance, TagAttribute, AnswersAppSchema> {
    
}