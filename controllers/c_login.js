const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { findUserByEmail } = require('../models/m_user')

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await findUserByEmail(email)

        if (!user) {
            return res.status(400).json({message: 'Email atau password salah !'})
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return res.status(400).json({message: 'Email atau password salah !'})
        }

        //membuat token jwt
        const token = jwt.sign(
            { id: user.id, email: user.email },
            process.env.JWT_SECREET,
            {expiresIn: '1h'}
        )

        res.json({ message: 'Login Berhasil', token })
        
    } catch (error) {
        console.error(error)
        res.status(500).json({message: 'Terjadi kesalahan pada server !'})
    }
}

module.exports = {loginUser}