import * as Sequelize from 'sequelize';

export const RoleAttributes = {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING(128),
        allowNull: false
    }
};