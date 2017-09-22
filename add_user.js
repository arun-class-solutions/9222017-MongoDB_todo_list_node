const MongoClient = require("mongodb").MongoClient;

const mongoUrl = "mongodb://localhost:27017/todo_db";

MongoClient.connect(mongoUrl, (err, db) => {

  db.collection("users").insert({
    firstName: "Arun",
    lastName: "Sood",
    email: "arsood@gmail.com"
  }, (err, newUser) => {
    console.log(newUser);
    db.close();
  });

});
