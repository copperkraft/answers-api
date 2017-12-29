import { inject, injectable } from 'inversify';
import { QuestionRepository } from 'data/repositories/interfaces/question.repository';
import { QuestionAttribute } from 'data/models/question';
import { Question } from '../models/question';

@injectable()
export class QuestionService {
    constructor(@inject('QuestionRepository') private questionRepository: QuestionRepository) { }
    
    async getQuestions(): Promise<Question[]> {
        const questions = await this.questionRepository.findAll();
        return questions.map(question => new Question(question));
    }
    
    async getQuestionById(id: number): Promise<QuestionAttribute|null> {
        return this.questionRepository.getById(id);
    }
}