import { AnswerAttribute } from './answer.attribute';

import * as Sequelize from 'sequelize';

export interface AnswerInstance extends Sequelize.Instance<AnswerAttribute>, AnswerAttribute { }