import {
    AggregateOptions,
    AnyWhereOptions, BulkCreateOptions, CountOptions,
    CreateOptions, FindOptions
} from 'sequelize';

export interface BaseRepository<Attribute> {    
    getById(id: number): Promise<Attribute|null>
    findAll(options?: FindOptions<Attribute>): Promise<Attribute[]>
    findOne(options: FindOptions<Attribute>): Promise<Attribute|null>
    update(info: Attribute, where: AnyWhereOptions): Promise<Attribute[]>
    updateById(info: Attribute, id: number): Promise<Attribute>
    remove(where: AnyWhereOptions): Promise<number> 
    create(info: Attribute, options?: CreateOptions): Promise<Attribute>
    count(info: CountOptions): Promise<number>
    bulkCreate(records: Attribute[], options?: BulkCreateOptions): Promise<Attribute[]>
    min(field: string, opts?: AggregateOptions): Promise<Attribute>
    max(field: string, opts?: AggregateOptions): Promise<Attribute>
}