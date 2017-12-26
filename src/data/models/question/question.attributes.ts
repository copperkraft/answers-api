import * as Sequelize from 'sequelize';

export const QuestionAttributes = {
    'id': {
        'type': Sequelize.UUID,
        'allowNull': false,
        'primaryKey': true
    },
    'name': {
        'type': Sequelize.STRING(128),
        'allowNull': false
    }
};