import { Answer } from './answer';
import { Tag } from './tag';
import { User } from './user';

export class Question {
    id: number;
    title: string;
    text: string;
    tags?: Tag[];
    answers?: Answer[];
    author?: User;

    constructor(data: any) {
        this.id = data.id;
        this.title = data.title;
        this.text = data.text;
        this.tags = data.tags && data.tags.map((tag: any) => new Tag(tag));
        this.answers = data.answers && data.answers.map((answer: any) => new Answer(answer));
        this.author = data.author && new User(data.author);
    }
}
