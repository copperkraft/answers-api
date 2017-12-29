import { DataSchema } from './helpers/data-schema';
import { VoteModel } from './models/vote';
import { UserModel } from './models/user';
import { QuestionModel } from './models/question';
import { AnswerModel } from './models/answer';
import { TagModel } from './models/tag';

export interface AnswersAppSchema extends DataSchema {
    User: UserModel;
    Tag: TagModel;
    Question: QuestionModel;
    Answer: AnswerModel;
    Vote: VoteModel;
} 

export class AnswersAppSchema implements AnswersAppSchema {
    constructor() {
        this.User = new UserModel();
        this.Tag = new TagModel();
        this.Question = new QuestionModel();
        this.Answer = new AnswerModel();
        this.Vote = new VoteModel();
    }
}