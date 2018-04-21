import { inject, injectable } from 'inversify';
import { QuestionRepository } from 'data/repositories/interfaces/question.repository';
import { QuestionAttribute } from 'data/models/question';
import { UserRepository } from '../../data/repositories/interfaces/user.repository';
import { errorConstants } from '../../helpers/error-constants';
import { Question } from '../models/question';

import { head } from 'lodash';

@injectable()
export class QuestionService {
    constructor(
        @inject('QuestionRepository') private questionRepository: QuestionRepository,
        @inject('UserRepository') private userRepository: UserRepository
    ) { }
    
    async getQuestions(options?: any): Promise<Question[]> {
        const questions = await this.questionRepository.findAll();
        return questions.map(question => new Question(question));
    }
    
    async getById(id: number): Promise<QuestionAttribute|null> {
        return new Question(
            await this.questionRepository.getById(id)
        );
    }
    
    async create(question: Question, userId: number, tags: number[]): Promise<Question> {
        return new Question(
            await this.questionRepository.createQuestion(Object.assign(question), userId, tags)
        );
    }
    
    async update(question: Question, id: number, userId: number): Promise<Question> {
        const updatedItem = head(await this.questionRepository.update(question, {id, userId}));
        if (updatedItem) {
            return new Question(updatedItem);
        } else {
            throw new Error(errorConstants.unauthorized);
        }
    }
    
    async deleteById(id: number, userId: number): Promise<void> {
        const deletedItems = await this.questionRepository.remove({id, userId});
        if (deletedItems) {
            return;
        } else {
            throw new Error(errorConstants.unauthorized);
        }
    }
}