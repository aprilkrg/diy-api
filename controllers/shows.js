const express = require("express")
const router = express.Router()
const db = require("../models")

// verb GET url "/shows" 
router.get("/", async (req, res) => {
    // intital checkpoint
    // res.send("THIS IS THE SHOW INDEX")
    // async await
    // console.log("\nDATABASE",db)
    // console.log("\nMODEL",db.show)
    try {
        // query table
        const allShows = await db.show.findAll()
        // response
        res.send({allShows})
        // res.json(allShows)

    } catch(err) {
        console.log(err)
    }
})

// POST "/shows"
router.post("/", async (req, res) => {
    // res.send("CREATE A SHOW")
    try {
        // const { title, description, spooky, watched } = req.body
        // res.send(title, description, spooky, watched)
        console.log("\nBODY:", req.body)

        const newShow = req.body
        console.log("\nNEW SHOW:", newShow)
        const createdShow = await db.show.create({
            title: newShow.title,
            description: newShow.description,
            spooky: newShow.spooky,
            watched: newShow.watched
        })
        res.send(createdShow)
    } catch(err) {
        console.log(err)
    }
})

// GET "/shows/1"
router.get("/:id", (req, res) => {
    res.send("THIS IS THE SHOW DETAIL")
})

// PUT "/shows/1"
router.put("/:id", async (req, res) => {
    // res.send("UPDATE SHOW")
    try {
        // query db for show
        const showToEdit = await db.show.findOne({
            where: {
                id: req.params.id
            }
        })
        // console.log(showToEdit)
        const newData = req.body
        // console.log(newData)
        const changedShow = await showToEdit.update(newData)
        res.send(changedShow)
    } catch(err) {
        console.log(err)
    }
})

// DELETE "/shows/1"
router.delete("/:id", async (req, res) => {
    // res.send("DELETE A SHOW")
    try{
        const showToDelete = await db.show.destroy({
            where: {
                id: req.params.id
            }
        })

    }catch(err) {
        console.log(err)
    }
})

module.exports = router