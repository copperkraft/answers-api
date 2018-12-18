import { Question } from './question';
import { User } from './user';

export class VoteAttribute {
    id?: number;
    isPositive: boolean = false;
    question?: Question;
    user?: User;
}
