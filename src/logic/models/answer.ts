import { Question } from './question';

export class Answer {
    id: number;
    text: string;
    question?: Question;
    
    constructor(data: any) {
        this.id = data.id;
        this.text = data.text;
        this.question = data.question && new Question(data.question);
    }
}
