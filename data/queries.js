const db = require("../config/configDatabase")


const getAllSeats = async () => {
   result = (await db.pool.query('SELECT * FROM seats'))[0]
   return result
}

const getSeatById = async (seatId) => {
    result = (await db.pool.query(`SELECT * FROM seats WHERE id = ${seatId}`))[0][0]
    return result
 }

const reserveSeat = async (seatId) => {
    result = await db.pool.query(`UPDATE seats SET is_reserved = true WHERE id = ${seatId} `)
 }

 const deleteReservation = async (seatId) => {
   result = await db.pool.query(`UPDATE seats SET is_reserved = false WHERE id = ${seatId} `)
}


 const buySeat = async (seatId, userEmail) => {
    result = await db.pool.query(`UPDATE seats SET user_email = '${userEmail}' WHERE id = ${seatId} `)
 }



module.exports = {getAllSeats, reserveSeat, buySeat, getSeatById, deleteReservation}



