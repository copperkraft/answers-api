import * as Sequelize from "sequelize";
import { RoleInstance } from './role.instance';
import { RoleAttribute } from './role.attribute';

export interface RoleModel extends Sequelize.Model<RoleInstance, RoleAttribute> { }