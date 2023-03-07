require("dotenv").config()
const express = require("express")
const router = require("./routes")
const Dbconnect = require("./database")
const cors = require("cors")

const app = express()
const corsOption = {
  origin: ["http://localhost:3000"],
}
app.use(cors(corsOption))
const PORT = process.env.PORT || 5500
Dbconnect()
app.use(express.json())
app.use(router)

app.get("/", (req, res) => {
  res.send("Hello from express Js")
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))