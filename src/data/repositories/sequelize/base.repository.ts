import * as Sequelize from 'sequelize';
import { errorConstants } from '../../../helpers/error-constants';
import { DataSchema } from '../../helpers/data-schema';
import {
    AggregateOptions,
    AnyWhereOptions, BulkCreateOptions, CountOptions,
    CreateOptions, FindOptions, WhereOptions
} from 'sequelize';
import { BaseRepository } from '../interfaces/base.repository';

export abstract class BaseSequelizeRepository<Instance 
    extends Sequelize.Instance<Attribute>, Attribute, Schema extends DataSchema> 
    implements BaseRepository<Attribute> {
    constructor(
        protected model: Sequelize.Model<Instance, Attribute>,
        protected schema: Schema
    ) { }
    
    async getById(id: number): Promise<Attribute> {
        const model = await this.model.findById(id);
        if (model) {
            return model.toJSON();
        }
        throw new Error(errorConstants.invalidId);
    }

    async findAll(options?: FindOptions<Attribute>): Promise<Attribute[]> {
        const models = await this.model.findAll(options);
        return models.map(model => model.toJSON());
    }

    async findOne(options: FindOptions<Attribute>): Promise<Attribute|null> {
        const model = await this.model.findOne(options);
        return model ? model.toJSON() : null;
    }

    async update(info: Attribute, where: AnyWhereOptions): Promise<Attribute[]> {
        const options = Object.assign({
            returning: true
        }, {
            where
        });
        
        const updateResult = await this.model.update(info, options);

        return updateResult[1].map(value => value.toJSON());
    }

    async updateById(info: Attribute, id: number): Promise<Attribute> {
        const updateResult = await this.update(info, {returning: true, id});
        return updateResult[0];
    }

    async remove(where: AnyWhereOptions = {}, options?: AnyWhereOptions): Promise<number> {
        const fullOptions = Object.assign({where}, options);
        return await this.model.destroy(fullOptions);
    }

    async create(info: Attribute, options?: CreateOptions, userId?: number): Promise<Attribute> {
        const newModel = await this.model.create(info, options);
        return newModel.toJSON();
    }

    async count(info: CountOptions): Promise<number> {
        return this.model.count(info);
    }

    async bulkCreate(records: Attribute[], options?: BulkCreateOptions): Promise<Attribute[]> {
        const fullOpts: BulkCreateOptions = Object.assign({
            returning: true,
            validate: true
        }, options);
        const createdModels = await this.model.bulkCreate(records, fullOpts);

        return createdModels.map(value => value.toJSON());
    }

    async min(field: string, opts?: AggregateOptions): Promise<Attribute> {
        return this.model.min(field, opts);
    }

    async max(field: string, opts?: AggregateOptions): Promise<Attribute> {
        return this.model.max(field, opts);
    }
}