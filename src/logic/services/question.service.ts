import {inject, injectable} from 'inversify';
import {QuestionRepository} from 'data/repositories/interfaces/question.repository';
import {QuestionAttribute} from 'data/models/question';

@injectable()
export class UserService {
    constructor(@inject('QuestionRepository') private questionRepository: QuestionRepository) { }
    
    async getQuestions(): Promise<QuestionAttribute[]> {
        return this.questionRepository.findAll();
    }
}