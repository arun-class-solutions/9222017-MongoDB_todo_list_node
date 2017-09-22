const MongoClient = require("mongodb").MongoClient;

// 1. Connect to MongoDB on port 27017
// 2. Take db instance and use it to run a query against the database
// 3. Close the connection after the query is complete

const mongoUrl = "mongodb://localhost:27017/todo_db";

MongoClient.connect(mongoUrl, (err, db) => {

  // "db" from above is the database instance that we can run queries on

  db.collection("todos").insert({
    todoText: "Clean the house",
    todoFinished: false
  }, (err, newTodo) => {
    console.log(newTodo);
    // "newTodo" from above is the new database record that was created
    // After DB query is complete, close the database
    db.close();
  });

});
