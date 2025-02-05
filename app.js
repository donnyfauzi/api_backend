const express = require('express')
const bodyPaser = require('body-parser')
const cors = require('cors')

const app = express()
const port = 5000

const r_register  = require('./routes/r_register')
const r_login = require('./routes/r_login')

const protectedRoutes = require("./routes/protectedRoutes")

app.use(
  cors({
    origin: "http://localhost:3000", // React frontend
    credentials: true, // Mengizinkan pengiriman cookie atau header Authorization
  })
);
app.use(bodyPaser.json())

app.use('/api', r_register)
app.use('/api', r_login)

app.use("/api/protected", protectedRoutes)

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`)
})