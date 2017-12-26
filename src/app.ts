import * as express from "express";
import * as config from "config";
import { DataStorage } from './data/helpers/data-storage';
import { UserModel } from './data/models/user';
import { QuestionModel } from './data/models/question';
import { RoleModel } from './data/models/role';
import { AnswersAppSchema } from './data/schema';

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
    'User': new UserModel(),
    'Role': new RoleModel(),
    'Question': new QuestionModel(),
    'Answer': new QuestionModel()
};

const storage = new DataStorage<AnswersAppSchema>(models,'postgresql://postgres:123456@localhost/answers','postgres');

storage.init(true);
