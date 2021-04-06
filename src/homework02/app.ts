import express from 'express'

const PORT = 4000

const app = express()

app.get('/', () => {
  console.log('hello express')
})

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`)
})

