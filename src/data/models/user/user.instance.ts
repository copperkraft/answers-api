import { UserAttribute } from './user.attribute';

import * as Sequelize from 'sequelize';

export interface UserInstance extends Sequelize.Instance<UserAttribute>, UserAttribute { }