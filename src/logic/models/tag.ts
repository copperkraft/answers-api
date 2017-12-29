import { Question } from './question';

export class Tag {
    id: number;
    title: string;
    questions?: Question[];
    
    constructor(data: any) {
        this.id = data.id;
        this.title = data.title;
        this.questions = data.questions && data.questions.map((question: any) => new Question(question));
    }
}