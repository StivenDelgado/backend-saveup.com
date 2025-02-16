import { Sequelize } from "sequelize";
import { sequelize } from "../database/db.js";


export const User = sequelize.define('user', {
    id_user: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    lastname: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        }
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    registration_date: {
        type: Sequelize.DATE,
    }
}, {
    timestamps: false,
});