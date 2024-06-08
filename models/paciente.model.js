import { sequelize } from "../db/dbConnection.js";
import { DataTypes } from "sequelize";

const paciente = sequelize.define('paciente', {
    nombre: {
        type: DataTypes.STRING
    },
    telefono: {
        type: DataTypes.BIGINT
    },
    ndocumento: {
        type: DataTypes.BIGINT
    },
    direccion: {
        type: DataTypes.STRING
    },
    eps: {
        type: DataTypes.STRING
    },
    usuario: {
        type: DataTypes.INTEGER,
        references: {
            model: 'usuario',
            key: 'id'
        }
    }
}, {tableName:'paciente', createdAt:false, updatedAt:false})

export default paciente