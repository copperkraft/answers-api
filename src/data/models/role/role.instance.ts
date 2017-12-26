import { RoleAttribute } from './role.attribute';

import * as Sequelize from 'sequelize';

export interface RoleInstance extends Sequelize.Instance<RoleAttribute>, RoleAttribute {
    
}