import { Container } from 'inversify';
import { QuestionRepository } from './interfaces/question.repository';
import { AnswerSequelizeRepository } from './sequelize/answer.repository';
import { AnswerRepository } from './interfaces/answer.repository';
import { UserRepository } from './interfaces/user.repository';
import { TagRepository } from './interfaces/tag.repository';
import { QuestionSequelizeRepository } from './sequelize/question.repository';
import { UserSequelizeRepository } from './sequelize/user.repository';
import { TagSequelizeRepository } from './sequelize/tag.repository';
import { AnswersAppSchema } from '../schema';
import { DataStorage } from '../helpers/data-storage';

export const bindRepositories = (container: Container, storage: DataStorage<AnswersAppSchema>): void => {
    container.bind<AnswerRepository>('AnswerRepository')
        .toConstantValue(new AnswerSequelizeRepository(storage.models.Answer.model, storage.models));
    container.bind<UserRepository>('UserRepository')
        .toConstantValue(new UserSequelizeRepository(storage.models.User.model, storage.models));
    container.bind<TagRepository>('TagRepository')
        .toConstantValue(new TagSequelizeRepository(storage.models.Tag.model, storage.models));
    container.bind<QuestionRepository>('QuestionRepository')
        .toConstantValue(new QuestionSequelizeRepository(storage.models.Question.model, storage.models));
};