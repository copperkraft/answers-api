import * as Sequelize from "sequelize";
import { UserInstance } from './user.instance';
import { UserAttribute } from './user.attribute';

export interface UserModel extends Sequelize.Model<UserInstance, UserAttribute> { }