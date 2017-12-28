import { BaseSequelizeRepository } from './base.repository';
import { injectable } from 'inversify';
import { AnswerAttribute, AnswerInstance } from '../../models/answer';
import { AnswersAppSchema } from '../../schema';
import { AnswerRepository } from '../interfaces/answer.repository';

@injectable()
export class AnswerSequelizeRepository 
    extends BaseSequelizeRepository<AnswerInstance, AnswerAttribute, AnswersAppSchema> 
    implements AnswerRepository {
    
    findByUserId(userId: number): Promise<AnswerAttribute[]> {
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