import { DataSchema } from './helpers/data-schema';
import { UserModel } from './models/user';
import { QuestionModel } from './models/question';
import { RoleModel } from './models/role';
import { AnswerModel } from './models/answer';

export interface AnswersAppSchema extends DataSchema {
    User: UserModel,
    Role: RoleModel,
    Question: QuestionModel,
    Answer: AnswerModel
}