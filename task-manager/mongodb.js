/*
 ** C R U D
 */

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connet DB"); // when we are returning this it will stop executing from this part
    }
    console.log("Connected Correctly");

    const DB = client.db(databaseName);
    DB.collection("users").insertOne({
      name: "Pandu",
      age: 27,
    });
  }
);
