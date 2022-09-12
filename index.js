const express = require("express")
const app = express()
const showsController = require("./controllers/shows")

const PORT = 3000

// app.use for controllers
app.use("/shows", showsController)

app.get("/", (req, res) => {
    res.send("HOME PAGE")
})

app.listen(PORT, () => {
    console.log("see what's playing on port " + PORT)
})