let express = require('express')
let router = express.Router()

const controller = require('../controllers/mainController')
const userAdmin = require('../middlewares/adminUsers')
const mainValidator = require("../validators/mainValidator")
router.get('/', controller.index)
router.get('/admin', userAdmin, controller.admin)
router.post('/', mainValidator ,controller.userData)

module.exports = router