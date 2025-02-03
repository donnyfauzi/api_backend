const pool = require('../config/database')

const findUserByEmail = async (email) => {
    const query = 'SELECT * FROM USERS WHERE email = $1'
    const { rows } = await pool.query(query, [email])
    return rows[0]
}

module.exports = {findUserByEmail}