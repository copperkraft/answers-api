import * as Sequelize from 'sequelize';

export const VoteAttributes = {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    'positive': {
        'type': Sequelize.BOOLEAN,
        'allowNull': false
    }
};