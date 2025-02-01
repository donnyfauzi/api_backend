const express = require('express')
const bodyPaser = require('body-parser')
const cors = require('cors')

const app = express()
const port = 5000

const r_register = require('./routes/r_register')

app.use(cors())
app.use(bodyPaser.json())

app.use('/api', r_register)

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});