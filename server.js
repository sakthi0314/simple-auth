const express = require("express")
const cors = require("cors")
const cookieParser = require("cookie-parser")

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({ credentials: true, origin: "http://127.0.0.1:5500" }))

app.get("/", (req, res) => {
  res.json({ message: "Home route" })
})

app.post("/login", (req, res) => {
  const { email, password } = req.body

  if (!email || !password)
    return res.status(400).json({ error: "enter all the field value" })

  res
    .cookie("user", email, {
      httpOnly: true,
      secure: true,
      maxAge: 7 * 24 * 3600 * 1000, //1 weeks
      path: "/",
    })
    .json({ message: "success" })
})

app.listen(3001, () => console.log("server running up on port 3001"))
