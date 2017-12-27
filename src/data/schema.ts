import { DataSchema } from './helpers/data-schema';
import { UserModel } from './models/user';
import { QuestionModel } from './models/question';
import { AnswerModel } from './models/answer';
import { TagModel } from './models/tag';

export interface AnswersAppSchema extends DataSchema {
    User: UserModel,
    Tag: TagModel,
    Question: QuestionModel,
    Answer: AnswerModel
}