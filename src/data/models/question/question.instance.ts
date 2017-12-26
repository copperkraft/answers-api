import { QuestionAttribute } from './question.attribute';
import { RoleAttribute } from '../role';

import {
    BelongsToGetAssociationMixin, 
    BelongsToSetAssociationMixin,
    Instance
} from 'sequelize';

export interface QuestionInstance extends Instance<QuestionAttribute>, QuestionAttribute {
    getRole: BelongsToGetAssociationMixin<RoleAttribute>;
    setRole: BelongsToSetAssociationMixin<RoleAttribute, string>;
}