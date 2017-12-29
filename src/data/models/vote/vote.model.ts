import { DataModel } from '../../helpers/data-model';
import { VoteAttributes } from './vote.attributes';
import * as Sequelize from "sequelize";
import { VoteInstance } from './vote.instance';
import { VoteAttribute } from './vote.attribute';


export class VoteModel extends DataModel<VoteInstance, VoteAttribute> {
    model: Sequelize.Model<VoteInstance, VoteAttribute>;
    constructor() {
        super('Vote', VoteAttributes);
    }

    associate(models: {[key: string]: DataModel<any, any>}) {
        this.model.belongsTo(models['Answer'].model);
    }
}