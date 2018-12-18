import { QuestionInstance } from './question.instance';
import { QuestionAttribute } from './question.attribute';
import { DataModel } from '../../helpers/data-model';
import { QuestionAttributes } from './question.attributes';

export class QuestionModel extends DataModel<QuestionInstance, QuestionAttribute> {
    constructor() {
        super('Question', QuestionAttributes);
    }

    associate(models: {[key: string]: DataModel<any, any>}) {
        this.model.belongsTo(models['User'].model);
        this.model.hasMany(models['Answer'].model);
        this.model.belongsToMany(models['Tag'].model, {through: 'TagQuestion'});
    }
}
