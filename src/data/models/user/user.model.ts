import * as Sequelize from "sequelize";
import { UserInstance } from './user.instance';
import { UserAttribute } from './user.attribute';
import { DataModel } from '../../helpers/data-model';
import { UserAttributes } from './user.attributes';

export class UserModel extends DataModel<UserInstance, UserAttribute> {
    model: Sequelize.Model<UserInstance, UserAttribute>;
    constructor() {
        super(
            'User',
            UserAttributes
        );
    }

    associate(models: {[key: string]: DataModel<any, any>}) {
        this.model.belongsTo(models['Role'].model);
        this.model.hasMany(models['Question'].model);
        this.model.hasMany(models['Answer'].model);
    }
}