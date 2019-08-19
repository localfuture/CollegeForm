const express =require('express');
const bodyParser =require('body-parser');
const app = express();

app.set('view engine','ejs');
app.use(express.static(__dirname+"/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.render("form");
});

app.post("/",(req,res)=>{
    var name = req.body.name;
    var rollNo = req.body.rollNo;
    var admissionNo = req.body.admissionNo;
    var collegeName = req.body.collegeName;
    console.log("name :"+name);
    console.log("rollNo :"+rollNo);
    console.log("admissionNo :"+admissionNo);
    console.log("collegeName :"+collegeName);

});
app.listen(process.env.PORT || 3000, ()=> {
    console.log("Server is Up and listening!!!");
});