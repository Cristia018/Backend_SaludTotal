import { sequelize } from "../db/dbConnection.js";
import { DataTypes } from "sequelize";
import Usuario from './usuario.model.js'

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
        type: DataTypes.STRING,
        defaultValue: "SaludTotal"
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