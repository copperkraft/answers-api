import * as Sequelize from 'sequelize';
import { UserModel } from '../models/user/user.model';
import { RoleModel } from '../models/role/role.model';
import { SequelizeStorageConfig } from './storage-config';
import { UserInstance } from '../models/user/user.instance';
import { UserAttribute } from '../models/user/user.attribute';
import { UserAttributes } from '../models/user/user.attributes';
import { RoleInstance } from '../models/role/role.instance';
import { RoleAttribute } from '../models/role/role.attribute';
import { RoleAttributes } from '../models/role/role.attributes';

export interface StorageManager {
    init(force?:boolean):Promise<any>;
}

export class SequelizeStorageManager {
    public sequelize: Sequelize.Sequelize;
    public userModel: UserModel;
    public roleModel: RoleModel;
    
    private config: SequelizeStorageConfig;

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