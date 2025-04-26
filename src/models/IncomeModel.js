import { INTEGER, Sequelize } from "sequelize";
import { sequelize } from "../database/db.js";

export const Income = sequelize.define('income',{
    id_income:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_finance:{
        type: Sequelize.INTEGER,
        references:{
            model: 'finance',
            key: 'id_finance',
        },
    },
    income_name:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    amount:{
        type: Sequelize.NUMERIC(10,2),
        allowNull: false,
    },
    icon:{
        type: Sequelize.STRING,
        allowNull: false
    },
    income_date:{
        type: Sequelize.DATE
    }
},{
    timestamps:false,
})