import * as Sequelize from "sequelize";
import { AnswerInstance } from './answer.instance';
import { AnswerAttribute } from './answer.attribute';
import { DataModel } from '../../helpers/data-model';
import { AnswerAttributes } from './answer.attributes';

export class AnswerModel extends DataModel<AnswerInstance, AnswerAttribute> {
    model: Sequelize.Model<AnswerInstance, AnswerAttribute>;
    constructor() {
        super('Answer', AnswerAttributes);
    }

    associate(models: {[key: string]: DataModel<any, any>}) {
        this.model.belongsTo(models['User'].model);
        this.model.belongsTo(models['Question'].model)
    }
}