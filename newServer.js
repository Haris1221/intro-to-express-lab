const express = require('express')
const path = require('path')
const studentsDb = require('./data/students-db')

const app = express()

app.set('view engine','ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', function(req,res){
    res.render('home',{allItems: studentsDb.getAll()})
})

app.get('/students', function(req,res){
    const students = studentsDb.getAll()
    res.render('students/index', {students})
})

app.get('/show', function(req,res){
    res.render('show', {students: studentsDb.getAll()})
})

app.get('/show/:id', function(req,res){
    res.render('showId', {students: studentsDb.getOne(req.params.id)})
})

app.listen(3000, function(){
    console.log('Listening on port 3000')
})