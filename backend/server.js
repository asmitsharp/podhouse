require("dotenv").config()
const express = require("express")
const router = require("./routes")
const Dbconnect = require("./database")
const cors = require("cors")
const cookieParser = require("cookie-parser")

const app = express()
app.use(cookieParser())
const corsOption = {
  credentials: true,
  origin: ["http://localhost:3000"],
}
app.use(cors(corsOption))
app.use("/storage", express.static("storage"))
const PORT = process.env.PORT || 5500
Dbconnect()
app.use(express.json({ limit: "8mb" }))
app.use(router)

app.get("/", (req, res) => {
  res.send("Hello from express Js")
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
