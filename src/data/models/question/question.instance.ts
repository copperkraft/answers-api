import { QuestionAttribute } from './question.attribute';

import * as Sequelize from 'sequelize';


export interface QuestionInstance extends Sequelize.Instance<QuestionAttribute>, QuestionAttribute { 
    
}