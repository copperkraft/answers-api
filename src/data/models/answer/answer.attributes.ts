import * as Sequelize from 'sequelize';

export const AnswerAttributes = {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    text: {
        type: Sequelize.STRING(128),
        allowNull: false
    }
};