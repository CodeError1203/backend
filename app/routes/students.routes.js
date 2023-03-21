module.exports = (app) =>{
    const student = require('../controllers/student.controllers')

    var router = require('express').Router()
    

    //Create a new student
     router.post('/create-student',student.create)
    
    // Retrieve all students
    router.get('/',student.findAll)

    // Regrieve a single student with id
     router.get('/edit-student/:id',student.findOne)

    //Update a student with id
    router.put('/update-student/:id',student.update)

    // Delete a student with id
     router.delete('/delete-student/:id',student.delete)

    app.use('/students',router)
}