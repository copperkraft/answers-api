import { TagAttribute } from './tag.attribute';

import * as Sequelize from 'sequelize';

export interface TagInstance extends Sequelize.Instance<TagAttribute>, TagAttribute { }