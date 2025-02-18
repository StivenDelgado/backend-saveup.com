import { Sequelize } from "sequelize";
import { sequelize } from "../database/db.js";

export const Finance = sequelize.define('finance',{
    id_finance: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_user: {
        type: Sequelize.INTEGER,
        references: {
            model: 'user',
            key: 'id_user'
        },
        allowNull: false,
    },
    curren_salary: {
        type: Sequelize.NUMERIC(10,2),
    },
    last_update_date: {
        type: Sequelize.DATE,
    }
},{
    timestamps: false,
})