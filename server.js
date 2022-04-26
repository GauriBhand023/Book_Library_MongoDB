if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config({path : '.env'})
}

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser')

const indexRouter = require('./routs/index')
const authorsRouter = require('./routs/authors')


app.set('view engine', 'ejs')
app.set('views',__dirname+ '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))
app.use(bodyParser.urlencoded({limit: '10mb', extended: false}))


const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser: true})
const db = mongoose.connection
db.on('error', error =>console.error(error))
db.once('open', () =>console.log('connected to mongoose'))


app.use('/', indexRouter)
app.use('/authors', authorsRouter)


app.listen(process.env.PORT || 3000)