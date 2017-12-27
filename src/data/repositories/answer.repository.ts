import { BaseRepository } from './base.repository';
import { AnswerAttribute, AnswerInstance } from '../models/answer';
import { AnswersAppSchema } from '../schema';

export class AnswerRepository extends BaseRepository<AnswerInstance, AnswerAttribute, AnswersAppSchema> {
    findByUserId(userId: number) {
        return this.findAll({
            include: [
                {
                    model: this.schema['User'].model,
                    where: {
                        id: userId
                    }
                }
            ]
        });
    }
}