import * as Sequelize from 'sequelize';
import { RoleModel } from './models/role';
import { UserModel } from './models/user';

export class DbStorage {
    public sequelize: Sequelize.Sequelize;
    public userModel: UserModel;
    public roleModel: RoleModel;

    constructor(databaseUrl: string, dialect: string = 'postgres') {
        this.sequelize = new Sequelize(databaseUrl, { dialect: dialect });
        
        this.userModel = new UserModel();
        this.userModel.connect(this.sequelize);
        
        this.roleModel = new RoleModel();
        this.roleModel.connect(this.sequelize);

        this.roleModel.associate({'User': this.userModel});
        this.userModel.associate({'Role': this.userModel});
    }
    
    async init(force?: boolean): Promise<any> {
        force = force || false;
        console.log('connecting to database');
        
        return await this.sequelize.sync({force: force, logging: true});
    }
}