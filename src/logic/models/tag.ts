import { Question } from './question';

export class Tag {
    id?: number;
    title: string;
    questions?: Question[];
    createdAt: Date;
    
    constructor(data: any) {
        this.id = data.id;
        this.title = data.title;
        this.createdAt = new Date(data.createdAt);
        this.questions = data.Questions && data.Questions.map((question: any) => new Question(question));
    }
}