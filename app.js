const express = require("express");
const  app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fruitsDB', {useNewUrlParser: true, useUnifiedTopology: true});

//----------------------- work for fruit COllection------------------------------------------
const fruitShema = new mongoose.Schema({ // defing schema/pattern for fruits how to store each item
name : String,
rating: Number,
review: String
});

const Fruit = mongoose.model("Fruit", fruitShema); //defing collection name in DB=Fruit  and Schema

const fruit = new Fruit({  //inserting records to defined schema
 name: "Apple",
 rating: 8,
 review:"very tasty fruit"

});
//------------------work for person collection--------------------
const personSchema = new mongoose.Schema({
name :String,
age:Number,
CNIC:Number,
Location:String
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
name:"Ali",
age:22,
CNIC:144-222-3333,
Location:"KOHAT"
});
person.save().then(() => console.log('Records saved succesfully in DB'));  // save records to DB according to schema defined with Schema & we need to define save() event for every collection


app.listen(process.env.PORT || 3000, function(req,res){    
    console.log("App is running on port 3000");

});

