import * as Sequelize from 'sequelize';
import { DataSchema } from './data-schema';

export abstract class DataModel<Instance, Attribute> {
    model!: Sequelize.Model<Instance, Attribute>;
    protected constructor(
        private modelName: string,
        private attributes: any, // fixme: replace any
        private tableOptions?: any // fixme: replace any
    ) { }
    connect(connection: Sequelize.Sequelize) {
        this.model = connection.define<Instance, Attribute>(
            this.modelName,
            this.attributes,
            this.tableOptions
        );
    }
    abstract associate(models: DataSchema): void;
}
