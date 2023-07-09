const express = require("express")
const router = express.Router()
const seatsController = require("../controllers/seatsController")

router.get("/", seatsController.getAllSeats)


router.get("/:id", seatsController.getSeatById)


router.post("/", seatsController.reserveSeat)


router.put("/", seatsController.addUserEmail)


router.delete("/", seatsController.deleteReservationDelayed)

module.exports = router