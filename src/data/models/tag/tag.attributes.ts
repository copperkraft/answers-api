import * as Sequelize from 'sequelize';

export const TagAttributes = {
    'id': {
        'type': Sequelize.UUID,
        'allowNull': false,
        'primaryKey': true
    },
    'title': {
        'type': Sequelize.STRING(128),
        'allowNull': false
    }
};