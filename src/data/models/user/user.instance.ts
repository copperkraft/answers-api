import { UserAttribute } from './user.attribute';
import { RoleAttribute } from '../role';

import {
    BelongsToGetAssociationMixin, 
    BelongsToSetAssociationMixin,
    Instance
} from 'sequelize';

export interface UserInstance extends Instance<UserAttribute>, UserAttribute {
    getRole: BelongsToGetAssociationMixin<RoleAttribute>;
    setRole: BelongsToSetAssociationMixin<RoleAttribute, string>;
}