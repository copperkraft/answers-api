import * as Sequelize from 'sequelize';

export abstract class DataModel<Instance, Attribute> {
    model: Sequelize.Model<Instance, Attribute>;
    constructor(
        private modelName: string,
        private attributes: any, //fixme: replace any
        private tableOptions?: any //fixme: replace any
    ) { 
        
    };
    connect(connection: Sequelize.Sequelize) {
        this.model = connection.define<Instance, Attribute>(
            this.modelName, 
            this.attributes, 
            this.tableOptions
        );
    }
    abstract associate(models: {[key: string]: DataModel<any, any>}): void;
}