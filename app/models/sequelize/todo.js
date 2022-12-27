"use strict";
const {
    sequelizeConnection,
    DataTypes,
    Model,
} = require('../../../config/database');

module.exports = () => {
    class Todo extends Model {
        static associate(models) {

        }
    }

    Todo.init(
        {
            userId: DataTypes.BIGINT.UNSIGNED,
            title: DataTypes.STRING,
            closed: DataTypes.BOOLEAN,
            deletedAt: DataTypes.DATE,
        },
        {
            sequelize: sequelizeConnection,
            paranoid: true,
            modelName: 'Todo',
        }
    );

    return Todo;
};
