import Citas from './citas.model.js'
import Consultorio from './consultorio.model.js'
import Especialidad from './especialidad.model.js'
import Medico from './medico.model.js'
import Paciente from './paciente.model.js'
import Rol from './rol.model.js'
import Turnos from './turnos.model.js'
import Usuario from './usuario.model.js'

Paciente.belongsTo(Usuario, { foreignKey: 'usuario', as: 'user' });
Citas.belongsTo(Especialidad, { foreignKey: 'especialidad', as: 'espec'})

export {
    Paciente,
    Usuario,
    Citas,
    Especialidad,
    Medico,
    Consultorio,
    Turnos
}