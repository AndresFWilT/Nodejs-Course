const { Router } = require("express");
const { getUsers, postUsers, putUsers, deleteUsers } = require("../controllers/user");

const router = Router();

// get all users
router.get("/", getUsers);

router.post("/", postUsers);

router.put("/:id", putUsers);

router.delete("/", deleteUsers);

module.exports = router;