import Express from 'express'
import cors from 'cors'
import { connectDB } from './db/dbConnection'

const app = Express()

app.use(cors({origin:"*"}))

connectDB()

app.listen(3000, ()=>{
    console.log('Running server...')
})

