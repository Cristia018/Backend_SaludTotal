import { sequelize } from "../db/dbConnection.js";
import { DataTypes } from "sequelize";

const citas = sequelize.define('citas', {
    estado: {
        type: DataTypes.STRING
    },
    fecha_destino: {
        type: DataTypes.DATE
    },
    paciente: {
        type: DataTypes.INTEGER,
        references: {
            model: 'paciente',
            key: 'id'
        }
    },
    especialidad: {
        type: DataTypes.INTEGER,
        references: {
            model: 'especialidad',
            key: 'id'
        }
    }
}, {
    tableName: 'citas',
    createdAt: false,
    updatedAt: false
});

export default citas;
