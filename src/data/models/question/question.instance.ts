import { UserAttribute } from '../user';
import { QuestionAttribute } from './question.attribute';

import * as Sequelize from 'sequelize';
import { TagAttribute } from '../tag';

export interface QuestionInstance extends Sequelize.Instance<QuestionAttribute>, QuestionAttribute {
    setUser: Sequelize.BelongsToSetAssociationMixin<UserAttribute, number>;
    setTags: Sequelize.HasManySetAssociationsMixin<TagAttribute, number>;
}