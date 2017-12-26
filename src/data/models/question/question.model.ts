import * as Sequelize from "sequelize";
import { QuestionInstance } from './question.instance';
import { QuestionAttribute } from './question.attribute';
import { DataModel } from '../../helpers/data-model';
import { RoleAttributes } from '../role';

export class QuestionModel extends DataModel<QuestionInstance, QuestionAttribute> {
    model: Sequelize.Model<QuestionInstance, QuestionAttribute>;
    constructor() {
        super('Question', RoleAttributes);
    }

    associate(models: {[key: string]: DataModel<any, any>}) {
        this.model.belongsTo(models['User'].model);
        this.model.hasMany(models['Answer'].model);
    }
}