import { Answer } from './answer';
import { Tag } from './tag';
import { User } from './user';

export class Question {
    id?: number;
    title: string;
    text: string;
    tags?: Tag[];
    answers?: Answer[];
    author?: User;

    constructor(data: any) {
        console.log(data);
        this.id = data.id;
        this.title = data.title;
        this.text = data.text;
        this.tags = data.Tags && data.Tags.map((tag: any) => new Tag(tag));
        this.answers = data.Answers && data.Answers.map((answer: any) => new Answer(answer));
        this.author = data.User && new User(data.User);
    }
}
