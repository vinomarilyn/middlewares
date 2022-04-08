let express = require('express')
let router = express.Router()

const controller = require('../controllers/mainController')
const userAdmin = require('../middlewares/adminUsers')
router.get('/', controller.index)
router.get('/admin', userAdmin, controller.admin)

module.exports = router