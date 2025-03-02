import { Sequelize } from "sequelize";
import { sequelize } from "../database/db.js";


export const Chat = sequelize.define('chat', {
    id_chat: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_user: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id_user'
        }
    },
    user_message: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    bot_response: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    chat_date: {
        type: Sequelize.DATE,
    }
}, {
    timestamps: false,
});