const express =require('express');
const bodyParser =require('body-parser');
const mongoose =require('mongoose');
const request = require('request');

const app = express();

app.set('view engine','ejs');

app.use(express.static(__dirname+"/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const StudentModel= mongoose.model("studentdetails",
{
    name:String,
    rollNo:String,
    admissionNo:String,
    collegeName:String

});

mongoose.connect("mongodb://localhost:27017/collegeDB");

app.get("/",(req,res)=>{
    res.render("form");
});

app.post("/",(req,res)=>{
    
    const student = StudentModel(req.body);
    var result = student.save((error)=>{
       
            console.log('user created');
       
    });
    console.log(result);
    res.send(result);

});

app.get("/getdatas",(req,res)=>{
    StudentModel.find((err, data)=>{
        console.log("API DATA"+ data);
        res.send(data);
      });
  
});
const api="http://localhost:3000/getdatas";

app.get("/view",(req,res)=>{


   request(api,(error,response,body)=>{
      
           var data = JSON.parse(body);
          
           res.render("view",{data:data});
     
   });

   
});

app.listen(process.env.PORT || 3000, ()=> {
    console.log("Server is Up and listening!!!");
});