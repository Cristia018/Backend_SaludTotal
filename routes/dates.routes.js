import {Router} from 'express'
import {getDates, getPendingDatesByPatient, postDate} from '../controllers/dates.controller.js'

const router = Router()

router.post('/', postDate)

router.get('/all', getDates)

router.get('/', getPendingDatesByPatient)

export default router