let express = require('express')
let router = express.Router()

const controller = require('../controllers/mainController')

router.get('/', controller.index)
//router.???('/search', indexController.search); 

module.exports = router