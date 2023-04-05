const db = require("./models")

const create = async () => {
    try {
        const data = await db.thread.create({
            title: "look at my cute cat",
            user: "april",
            content: "she's actually a monster",
            parent_forum: "cats"
        })
        console.log("CREATE:", data)
    } catch (err) {
        console.warn(err)
    }
}
// create() 

const read = async () => {
    try {
        const foundThread = await db.thread.findOrCreate({
            where: {
                title: "my cat"
            },
            defaults: {
                user: "gabe",
                content: "she knows she's a star",
                parent_forum: "cats"
            }
        })
        console.log("FIND OR CREATE: ", foundThread)
    } catch (err) {
        console.warn(err)
    }
}
// read()

const update = async () => {
    try {
        // update({obj with updated info}, {where: {obj with selection}})
        const updatedThread = await db.thread.update(
            { 
                content: "she's a princess" 
            },
            {
                where: {
                    user: "april"
                }
            },
        )
        console.log('UPDATE:', updatedThread)
    } catch (err) {
        console.warn(err)
    }
}
// update()

const destroy = async () => {
    try {
        await db.thread.destroy({
            where: {
                id: 1
            }
        })
        console.log("DELETED")
    } catch(err) {
        console.warn(err)
    }
}
// destroy()