var express = require('express');

var app = express();
var route = express.Router();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json());
var mongoose = require('mongoose');
var Employee = require('./models/employee.model')

//core start
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
var cors = require('cors');
 
var originsWhitelist = [
'http://localhost:4200'
];
var corsOptions = {
origin: function(origin, callback){
var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
callback(null, isWhitelisted);
},
credentials:true
}
app.use(cors(corsOptions));

//Core end

mongoose.connect("mongodb://localhost/company",()=>{
    console.log('database connecetd')
})


route.get('/test',(req,res)=>{
    res.json({
        message : 'Hello World'
    })
})

route.delete('/employees/:id',(req,res)=>{
    Employee.remove({_id : req.params.id},(err,employee)=>{
        if(err){
            console.log('The error is ',err)
        }
        res.json({
            message : "Record deleted"
        })
    })
})

route.post('/employees',(req,res)=>{
    console.log('Req is ',req.body)
var emp = new Employee();
emp.name = req.body.name;
emp.age = req.body.age;
emp.salary = req.body.salary;
emp.save();
res.json({
    message : "record Inserted"
})

})

route.put('/employees/:id',(req,res)=>{
    Employee.update({_id : req.params.id},req.body,(err,employee)=>{
        if(err){
            console.log('The error is ',err)
        }
        res.json({
            message : 'Updated'
        })
    })
})

route.get('/employees',(req,res)=>{
    Employee.find({},(err,employees)=>{
res.json(employees)
    })
})

app.use('/api',route);
app.listen(3000,()=>{
    console.log('Server starts')
})