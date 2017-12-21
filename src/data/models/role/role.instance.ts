import { UserAttribute } from '../user/user.attribute';
import { RoleAttribute } from './role.attribute';

import {
    HasManyAddAssociationMixin,
    HasManyAddAssociationsMixin, 
    HasManyCountAssociationsMixin,
    HasManyGetAssociationsMixin, 
    HasManyHasAssociationMixin,
    HasManyHasAssociationsMixin,
    HasManyRemoveAssociationMixin,
    HasManyRemoveAssociationsMixin,
    HasManySetAssociationsMixin,
    Instance
} from 'sequelize';

export interface RoleInstance extends Instance<RoleAttribute>, RoleAttribute {
    getUsers: HasManyGetAssociationsMixin<UserAttribute>;
    setUsers: HasManySetAssociationsMixin<UserAttribute, string>;
    addUsers: HasManyAddAssociationsMixin<UserAttribute, string>;
    addUser: HasManyAddAssociationMixin<UserAttribute, string>;
    removeUser: HasManyRemoveAssociationMixin<UserAttribute, string>;
    removeUsers: HasManyRemoveAssociationsMixin<UserAttribute, string>;
    hasUser: HasManyHasAssociationMixin<UserAttribute, string>;
    hasUsers: HasManyHasAssociationsMixin<UserAttribute, string>;
    countUsers: HasManyCountAssociationsMixin;
}