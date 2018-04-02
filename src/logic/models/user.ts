import { Answer } from './answer';
import { Question } from './question';

export class User {
    id?: number;
    name: string;
    email: string;
    questions?: Question[];
    answers?: Answer[];
    
    constructor(data: any) {
        this.id = data.id;
        this.name = data.name;
        this.email = data.email;
        this.questions = data.questions && data.questions.map((question: any) => new Question(question));
    }
}
