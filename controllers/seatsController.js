const queries = require('../data/queries')
const mail = require("../config/mail")
const notFound = 404
const ok = 200
const forbidden = 403
const delayTime = 7200000


const getAllSeats = async (req, res) => {
    const seats = await  queries.getAllSeats()
    if(seats){
        res.send(seats)
    }
    else{
        res.sendStatus(notFound)
    }
}

const getSeatById = async (req, res) => {
    const seatId = req.body.id
    if (seatId){
        const seat = await  queries.getSeatById(seatId)
        if(seat){
            res.send(seat)
        }
        else{
            res.sendStatus(notFound)
        }
    }
    else{
        res.sendStatus(notFound)
    }
}

const reserveSeat = async (req, res) => {
    const seatId = req.body.id
    if (seatId){
        const seat = await  queries.getSeatById(seatId)
        if(seat){
            if(seat.is_reserved == 1){
                res.sendStatus(forbidden)
            }
            else{
                queries.reserveSeat(seatId)
                res.sendStatus(ok)
            }
        }
        else{
            res.sendStatus(notFound)
        }
    }
    else{
        res.sendStatus(notFound)
    }
}

const deleteReservationDelayed = (req, res) => {
    const seatId = req.body.id
    console.log(seatId)
    if(seatId){
        res.sendStatus(ok)
        sleep(delayTime).then(() => {
            queries.deleteReservation(seatId)
          });
    }
    else{
        res.sendStatus(notFound)
    }
}

const buySeat = (req, res) => {
    const userEmail = req.body.email
    const userId = req.body.id
    if (userId && userEmail){
        queries.buySeat(userId, userEmail).then(() =>{
            queries.deleteReservation(userId)
            mail.sendMail(userEmail)
            res.sendStatus(ok)
        })
    }
    else{
        res.sendStatus(notFound)

    }
}

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  

module.exports = {
    getAllSeats, 
    getSeatById,
    reserveSeat,
    addUserEmail: buySeat,
    deleteReservationDelayed
}
