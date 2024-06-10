import Paciente from '../models/paciente.model.js';
import Usuario from '../models/usuario.model.js'

export const logIn = async (req, res) => {
  const { correo, clave } = req.body;

  try {
    const usuario = await Usuario.findOne({ where: { correo } });
    if (!usuario) {
      return res.status(401).json({ error: 'Credenciales incorrectas', auth: false });
    }

    const paciente = await Paciente.findOne({ where: { usuario: usuario.id } })

    const isPasswordValid = clave === usuario.clave
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Credenciales incorrectas', auth: false });
    }


    return res.json({ message: 'Autenticación exitosa', auth: true, user: {...usuario, idPaciente: paciente.id} });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en el servidor', auth: false });
  }
}

export const register = async (req, res) => {
  const { correo, clave, rol, nombre, direccion, ndocumento, telefono } = req.body;

  try {
    if (!correo || !clave || !rol || !nombre || !direccion || !ndocumento || !telefono) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    const nuevoUsuario = await Usuario.create({
      correo,
      clave,
      rol
    });

    const nuevoPaciente = await Paciente.create({
      nombre, direccion, ndocumento, telefono, usuario: nuevoUsuario.id
    })

    res.status(201).json({ message: 'Usuario creado exitosamente', user: {...nuevoUsuario, idPaciente: nuevoPaciente.id} });
  } catch (error) {
    console.error('Error al crear usuario:', error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
}
