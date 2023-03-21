//const  {Schema}  = require("mongoose")

module.exports = (mongoose)=> {
    var schema = mongoose.Schema(
        {
            code:String,
            firstname:String,
            lastname:String,
            email:String
        },
        {
            timestamps:true
        }
       
    )
    const Student = mongoose.model('Student', schema)
    return Student
}