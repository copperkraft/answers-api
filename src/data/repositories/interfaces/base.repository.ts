import {
    AggregateOptions,
    AnyWhereOptions,
    BulkCreateOptions,
    CountOptions,
    CreateOptions,
    FindOptions, WhereOptions
} from 'sequelize';

export interface BaseRepository<Attribute> {    
    getById(id: number): Promise<any & Attribute>;
    findAll(options?: FindOptions<Attribute>): Promise<any[]>;
    findOne(options: FindOptions<Attribute>): Promise<any|null>;
    update(info: Attribute, where: AnyWhereOptions): Promise<any[]>;
    updateById(info: Attribute, id: number): Promise<any>;
    remove(where: AnyWhereOptions): Promise<number>;
    create(info: Attribute, options?: CreateOptions): Promise<any>;
    count(info: CountOptions): Promise<number>;
    bulkCreate(records: Attribute[], options?: BulkCreateOptions): Promise<any[]>;
    min(field: string, opts?: AggregateOptions): Promise<any>;
    max(field: string, opts?: AggregateOptions): Promise<any>;
}