const usercont=require('../controller/todocont');
const express = require('express')

const router = express.Router()

router.post('/addtask',usercont.taskadd)
router.post('/gettask',usercont.gettodo)
router.post('/deletetask',usercont.deletetodo)

module.exports = router;