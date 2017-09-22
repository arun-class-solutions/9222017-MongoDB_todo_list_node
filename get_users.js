const MongoClient = require("mongodb").MongoClient;

const mongoUrl = "mongodb://localhost:27017/todo_db";

MongoClient.connect(mongoUrl, (err, db) => {

  db.collection("users").aggregate([
    {
      $lookup: {
        from: "todos",
        localField: "_id",
        foreignField: "userId",
        as: "todos"
      }
    }
  ]).toArray((err, users) => {
    // "users" from above represents all of the user data coming from the .find() query
    console.log(users);
    db.close();
  });

});
