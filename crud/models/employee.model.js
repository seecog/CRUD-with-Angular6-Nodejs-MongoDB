var mongoose = require("mongoose");


var employeeSchema = new mongoose.Schema({
    name : String,
    age : Number,
    salary : Number
})


module.exports = mongoose.model('Employee',employeeSchema)