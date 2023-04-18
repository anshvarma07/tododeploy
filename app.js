const express= require("express");
const mongoose= require("mongoose")
const bodyParser= require("body-parser");
// const mongodb = require('mongodb');

const app=express();
const port=300;

app.set("view engine","ejs");
app.use(express.static("public"));

mongoose.connect("mongodb+srv://anshvarma7:Mummypapa%4019@cluster0.fslkasz.mongodb.net/?retryWrites=true&w=majority",{useNewUrlParser:true});

const itemsSchema = new mongoose.Schema({
    name:String
});

const Item=mongoose.model("Item",itemsSchema);

const item1= new Item({
    name: "Welcome to your todo list!"
})
const item2= new Item({
    name: "Tap on + to add."
})
const item3= new Item({
    name: "<-- Hit on this to delete."
})

const defaultItems=[item1,item2,item3];
Item.insertMany(defaultItems)

app.use(bodyParser.urlencoded({extended:true}));

var write="";
app.get("/", function(req,res){
    var today = new Date;
    var options={
        weekday:"long",
        day:"numeric",
        month:"long",
    };  
    var day = today.toLocaleDateString("en-US",options)
    
    if(defaultItems.length===0){
        write="Enter Something to your to do list."
    }
    else{
        write=`You have ${defaultItems.length} pending work(s).`
    }
    let Texttodo=defaultItems.name
    res.render("index",{dayitis:day , TextOfToDo: defaultItems ,writehere:write})
})

app.post("/",function(req,res){

    if (req.body.TextOfToDo!="") {
        // defaultItems.push(req.body.TextOfToDo);
        const itemName=req.body.TextOfToDo;
        const newItem= new Item({
            name: itemName
        })
        defaultItems.push(newItem);
        

        res.redirect("/")
    }
    else{
        res.redirect("/")
    }
    
})




app.listen(port || process.env.PORT ,function(){
    console.log(`App started on port ${port}`);
})