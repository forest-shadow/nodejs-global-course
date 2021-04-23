import express from 'express'
import userRouter from './user/userRouter'

const PORT = 4080

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(userRouter)

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`)
})

