import { Sequelize } from "sequelize";
import { sequelize } from "../database/db.js";

export const Goal = sequelize.define('goals',{
    id_goal: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_user: {
        type: Sequelize.INTEGER,
        references:{
            model: 'user',
            key: 'id_user'
        },
    },
    goal_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    target_amount: {
        type: Sequelize.NUMERIC(10,2),
        allowNull: false,
    },
    deadline: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    current_amount:{
        type: Sequelize.NUMERIC(10,2),
        allowNull: false,
    }
},{
    timestamps:false
});