const { Router } = require("express");
const { check } = require("express-validator");

const { validateFields } = require("../middlewares/user-validation");
const { roleIsValid, userExists } = require('../helpers/db-validators');
const { emailIsValid } = require('../helpers/email-validators');

const { getUsers, postUsers, putUsers, deleteUsers } = require("../controllers/user");

const router = Router();

// get all users
router.get("/", [
    validateFields
],getUsers);

router.post("/", [
    check('name', 'the name is not valid').not().isEmpty(),
    check('password', 'the password must be 6 char length').isLength({min:6}),
    check('email').custom( emailIsValid ),
    check('email',`email doesn't exists `).isEmail(),
    check('role').custom( roleIsValid ),
    validateFields
], postUsers);

router.put("/:id",[
    check('id','Not a valid id').isMongoId(),
    check('id').custom( userExists ),
    check('role').custom( roleIsValid ),
    validateFields
],putUsers);

router.delete("/:id", [
    check('id','Not a valid id').isMongoId(),
    check('id').custom( userExists ),
    validateFields
],deleteUsers);

module.exports = router;