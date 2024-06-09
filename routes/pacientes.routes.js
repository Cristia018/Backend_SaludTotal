import {Router} from 'express'
import {getPacientes} from '../controllers/pacientes.controller.js'

const router = Router()

router.get('/', getPacientes)

export default router