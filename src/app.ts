import * as express from "express";
import * as config from "config";
import { DataStorage } from './data/helpers/data-storage';
import { UserModel } from './data/models/user';
import { QuestionModel } from './data/models/question';
import { AnswersAppSchema } from './data/schema';
import { TagModel } from './data/models/tag';

const PORT = parseInt(config.get('port'),10) || 3001;
const HOST = config.get('host').toString();

const app = express();
app.get('/', (req, res) => {
    res.send('Hello world\n');
});

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`); 
});

const models: AnswersAppSchema = {
    User: new UserModel(),
    Question: new QuestionModel(),
    Answer: new QuestionModel(),
    Tag: new TagModel()
};

const storage = new DataStorage<AnswersAppSchema>(models,'postgresql://postgres:123456@localhost/answers','postgres');

storage.init(true).then(async () => {
    console.log("connected");
});
