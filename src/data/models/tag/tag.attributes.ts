import * as Sequelize from 'sequelize';

export const TagAttributes = {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    'title': {
        'type': Sequelize.STRING(128),
        'allowNull': false
    }
};