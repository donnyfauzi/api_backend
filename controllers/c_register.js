const bcrypt = require('bcryptjs')
const { createUser, findUserByEmail } = require('../models/m_register')

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body
        
        const exsistUser = await findUserByEmail(email)
        if (exsistUser) {
            return res.status(400).json({message: "Email sudah terdaftar !"})
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = await createUser(name, email, hashedPassword)
        res.status (201).json({message: "Registrasi berhasil !", user: newUser})
    } catch (error) {
        res.status(500).json({message: "Registrasi gagal !", error: error.message})
    }
}

module.exports = {registerUser}