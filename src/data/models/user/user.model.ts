import * as Sequelize from "sequelize";
import { UserInstance } from './user.instance';
import { UserAttribute } from './user.attribute';
import { DataModel } from '../../helpers/data-model';
import { RoleAttributes } from '../role';

export class UserModel extends DataModel<UserInstance, UserAttribute> {
    model: Sequelize.Model<UserInstance, UserAttribute>;
    constructor() {
        super(
            'User',
            RoleAttributes,
            {
                "tableName": "users",
                "timestamps": true,
                "createdAt": "created_at",
                "updatedAt": "updated_at",
            }
        );
    }

    associate(models: {[key: string]: DataModel<any, any>}) {
        this.model.belongsTo(models['Role'].model);
    }
}