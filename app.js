const express = require("express");
const  app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fruitsDB', {useNewUrlParser: true, useUnifiedTopology: true});

//----------------------- work for fruit COllection------------------------------------------
const fruitShema = new mongoose.Schema({ // defing schema/pattern for fruits how to store each item
name :{
    type:String,
    required: [true,"name is required"]
},
rating:{
   type:Number,
   min:1,
   max:10
},
review: String
});

const Fruit = mongoose.model("Fruit", fruitShema); //defing collection name in DB=Fruit  and Schema

const fruit = new Fruit({  //inserting records to defined schema
 name: "bnana",
 rating: 9,
 review:"good for health"

});
//fruit.save();
//------------------work for person collection--------------------
const personSchema = new mongoose.Schema({
name :String,
age:Number,
CNIC:Number,
Location:String,
favrouriteFruit:fruitShema
});

// const Person = mongoose.model("Person", personSchema);

// const mango = new Fruit({
//     name: "mango",
//     rating: 2,
//     review:"This is very good fruit"
// });
// mango.save();

// const person = new Person({
// name:"Hassan",
// age:25,
// CNIC:333333333,
// Location:"Quetta",
// favrouriteFruit:pineapple
// });

// person.save();

//  Fruit.find(function(err,fruits){ // this is find records in database
// if(err)
// {
//     console.log(err)
// }else{

//     mongoose.connection.close();
//     fruits.forEach(function(fruit){

//   console.log(fruit.name)
//     });
// }

// });

Person.updateOne({_id:"5fa6cda8fd80c8217cd3ab63"}, {favrouriteFruit:mango},function(err){  //this wil update records in database
if(err)
{
   console.log(err)
}else{
   console.log("Succesfully Updated")
}
});

// Fruit.deleteOne({ name:"Peach"}, function(err){  // this is for delete Onlu One record from DB
//     if(err){
//         console.log(err)
//     }else{
//         console.log("Record Deleted")
//     }
    
//     });

// Fruit.deleteMany({ name:"bnana"}, function(err){  // this is for delete many records from DB
// if(err){
//     console.log(err)
// }else{
//     console.log("Record Deleted")
// }
// });

//person.save().then(() => console.log('Records saved succesfully in DB'));  // save records to DB according to schema defined with Schema & we need to define save() event for every collection


app.listen(process.env.PORT || 3000, function(req,res){    
    console.log("App is running on port 3000");

});

