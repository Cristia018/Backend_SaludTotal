import { sequelize } from "../db/dbConnection";
import { DataTypes } from "sequelize";

const user = sequelize.define('Usuario', {
    correo: {
        type: DataTypes.STRING
    },
    clave: {
        type: DataTypes.STRING
    },
    rol: {
        type: DataTypes.INTEGER,
        references: {
            
        }
    }
})