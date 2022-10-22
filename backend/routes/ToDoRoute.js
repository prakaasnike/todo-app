//Route Initialization
const { Router } = require("express");
const { getToDo, saveToDo, updateToDo, deleteToDo } = require("../controllers/ToDoController");

const router = Router()

//To Check Message
// router.get("/", (req, res) => {
//     res.json({ message: "Hi there" })
// })

//Call from controller
router.get("/", getToDo)
router.post("/save", saveToDo)
router.post("/update", updateToDo)
router.post("/delete", deleteToDo)


module.exports = router;