const express = require('express')
const app = express()
const cors = require('cors');

app.use(cors({
    origin: '*'
}));

app.use(express.json())

const seatsRouter = require("./routes/seats")
app.use("/seats", seatsRouter)

app.listen(3000, () => console.log("server started"))
