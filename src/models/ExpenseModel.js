import { INTEGER, Sequelize } from "sequelize";
import { sequelize } from "../database/db.js";

export const Expense = sequelize.define('expense',{
    id_expense: {
        type: Sequelize.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
    },
    id_finance: {
        type: Sequelize.INTEGER,
        references:{
            model: 'finance',
            key: 'id_finance'
        },
    },
    expense_name: {
        type:Sequelize.STRING,
        allowNull: false,
    },
    amount: {
        type: Sequelize.NUMERIC(10,2),
        allowNull: false,
    },
    icon:{
        type: Sequelize.STRING,
        allowNull: false
    },
    expense_date:{
        type: Sequelize.DATE,
    }
},{
    timestamps: false
})