import { DataModel } from './data-model';

export interface DataSchema { [key: string]: DataModel<any, any>; }