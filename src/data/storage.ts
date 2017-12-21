import * as Sequelize from 'sequelize';

import {
    UserAttribute, 
    UserAttributes,
    UserInstance,
    UserModel
} from './models/user';

import {
    RoleAttribute, 
    RoleAttributes, 
    RoleInstance,
    RoleModel
} from './models/role';


export interface StorageManager {
    init(force?:boolean): Promise<any>;
}

export class SequelizeStorageManager {
    public sequelize: Sequelize.Sequelize;
    public userModel: UserModel;
    public roleModel: RoleModel;

    constructor() {
        this.sequelize = new Sequelize('postgresql://postgres:123456@localhost/answers', { dialect: "postgres" });
        
        this.userModel = this.sequelize.define<UserInstance, UserAttribute>("User", UserAttributes,
            {
                "tableName": "users",
                "timestamps": true,
                "createdAt": "created_at",
                "updatedAt": "updated_at",
            });
        this.roleModel = this.sequelize.define<RoleInstance, RoleAttribute>("Role", RoleAttributes,
            {
                "tableName": "addresses",
                "timestamps": true,
                "createdAt": "created_at",
                "updatedAt": "updated_at",
            });
        
        this.userModel.belongsTo(this.roleModel);
        this.roleModel.hasMany(this.userModel);
    }

    async init(force?: boolean): Promise<any> {
        force = force || false;
        console.log('connecting to database');
        return this.sequelize.sync({force: force, logging: true});
    }
}