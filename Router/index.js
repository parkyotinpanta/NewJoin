const express = require('express')
const router = express.Router()
const {read,FindProvincesByName,insert,update,remove} = require('../controllers/image/index')




router.get('/read',read)
router.get('/findprovincesbyname',FindProvincesByName)
router.post('/insert',insert)
router.post('/updete',update)
router.post('/del',remove)

module.exports = router