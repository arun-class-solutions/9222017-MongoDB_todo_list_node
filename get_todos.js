const MongoClient = require("mongodb").MongoClient;

const mongoUrl = "mongodb://localhost:27017/todo_db";

MongoClient.connect(mongoUrl, (err, db) => {

  db.collection("todos").find({}).toArray((err, todos) => {
    // "todos" from above represents all of the todo data coming from the .find() query
    console.log(todos);
    db.close();
  });

});
