import * as Sequelize from 'sequelize';

export const RoleAttributes = {
    "id": {
        "type": Sequelize.UUID,
        "allowNull": false,
        "primaryKey": true
    },
    "name": {
        "type": Sequelize.STRING(128),
        "allowNull": false
    }
};