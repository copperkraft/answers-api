import { AnswerAttribute } from './answer.attribute';
import { RoleAttribute } from '../role';

import {
    BelongsToGetAssociationMixin, 
    BelongsToSetAssociationMixin,
    Instance
} from 'sequelize';

export interface AnswerInstance extends Instance<AnswerAttribute>, AnswerAttribute {
    getRole: BelongsToGetAssociationMixin<RoleAttribute>;
    setRole: BelongsToSetAssociationMixin<RoleAttribute, string>;
}