const express = require('express')
const router = express.Router()
const Author = require('../models/author')

router.get('/',(req, res)=>{
    res.render('aothors/index')
})

router.get('/new',(req,res) =>{
    res.render('authors/new', {author: new Author()})
})

router.post('/',(req, res)=>{
    res.send('create')
})

module.exports = router