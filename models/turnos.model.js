import { sequelize } from "../db/dbConnection.js";
import { DataTypes } from "sequelize";

const turnos = sequelize.define('turnos', {
    paciente: {
        type: DataTypes.INTEGER,
        references: {
            model: 'paciente',
            key: 'id'
        }
    },
    consultorio: {
        type: DataTypes.INTEGER,
        references: {
            model: 'consultorio',
            key: 'id'
        }
    }
}, {
    tableName: 'turnos',
    createdAt: false,
    updatedAt: false
});

export default turnos;