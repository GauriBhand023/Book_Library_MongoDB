const express = require('express')
const router = express.Router()

router.get('/',(req, res)=>{
    res.render('aothors/index')
})

router.get('/new',(req,res) =>{
    res.render('authors/new')
})

router.post('/',(req, res)=>{
    res.send('create')
})

module.exports = router