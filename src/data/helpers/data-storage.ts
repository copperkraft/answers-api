import * as Sequelize from 'sequelize';
import { DataSchema } from './data-schema';

export class DataStorage<Schema extends DataSchema> {
    public sequelize: Sequelize.Sequelize;

    constructor(
        public models: Schema,
        databaseUrl: string, 
        dialect: string = 'postgres'
    ) {
        this.sequelize = new Sequelize(databaseUrl, { dialect });
        Object.keys(this.models)
            .map((key: string) => models[key])
            .map(model => {
                model.connect(this.sequelize);
                return model;
            })
            .forEach(model => model.associate(models));
    }
    
    async init(force?: boolean): Promise<any> {
        force = force || false;
        console.log('connecting to database');
        
        return await this.sequelize.sync({force, logging: true});
    }
}