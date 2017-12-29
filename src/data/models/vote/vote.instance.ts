import { VoteAttribute } from './vote.attribute';

import * as Sequelize from 'sequelize';

export interface VoteInstance extends Sequelize.Instance<VoteAttribute>, VoteAttribute { }