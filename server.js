import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import connectDb from './database/db.js'
import userRouter from './routes/userRoutes.js'
import voteRouter from './routes/voteRoutes.js'
import resultRouter from './routes/resultRoutes.js'
import passwordRouter from './routes/passwordRoutes.js'
import otpRouter from './routes/otpRoutes.js'
import candidateRouter from './routes/candidateRoutes.js'
import electionRouter from './routes/electionRoutes.js'

connectDb()

const app = express()

dotenv.config()
port = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(cookieParser())
app.use("/uploads", express.static("uploads"))



app.use('/api/user', userRouter)
app.use('/api/vote', voteRouter)
app.use('/api/results', resultRouter)
app.use('/api/password', passwordRouter)
app.use('/api/otp', otpRouter)
app.use('/api/candidate', candidateRouter)
app.use('/api/election', electionRouter)


app.listen(port, ()=>{
    console.log(`Our app is up and running on ${port}`)
})