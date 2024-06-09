import {Router} from 'express'
import {postDate} from '../controllers/dates.controller.js'

const router = Router()

router.post('/', postDate)

export default router