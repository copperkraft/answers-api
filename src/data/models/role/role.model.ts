import * as Sequelize from "sequelize";
import { RoleInstance } from './role.instance';
import { RoleAttribute } from './role.attribute';
import { DataModel } from '../../helpers/data-model';
import { RoleAttributes } from './role.attributes';

export class RoleModel extends DataModel<RoleInstance, RoleAttribute> { 
    model: Sequelize.Model<RoleInstance, RoleAttribute>;
    constructor() {
        super(
            'Role',
            RoleAttributes,
            {
                "tableName": "roles",
                "timestamps": true,
                "createdAt": "created_at",
                "updatedAt": "updated_at",
            }
        );
    }

    associate(models: {[key: string]: DataModel<any, any>}) {
        this.model.hasMany(models['User'].model);
    }
}