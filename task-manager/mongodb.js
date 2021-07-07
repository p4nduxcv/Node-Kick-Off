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

    /***
     * Insert Only One
     */

    // DB.collection("users").insertOne(
    //   {
    //     name: "Pandu",
    //     age: 27,
    //   },
    //   (err, results) => {
    //     if (err) {
    //       return console.log("went wrong");
    //     } else {
    //       console.log(results.ops);
    //     }
    //   }
    // );

    /**
     * Insert Bulk Operations
     */

    // DB.collection("users").insertMany(
    //   [
    //     {
    //       name: "Pandu",
    //       age: 27,
    //     },
    //     {
    //       name: "Dan",
    //       age: 27,
    //     },
    //     {
    //       name: "Man",
    //       age: 27,
    //     },
    //   ],
    //   (err, results) => {
    //     if (err) {
    //       return console.log("something went wrong");
    //     }
    //     console.log(results.ops);
    //   }
    // );

    DB.collection("tasks").insertMany(
      [
        {
          description: "Inserts an array of documents into MongoDB",
          completed: true,
        },
        {
          description: "Inserts an array of documents into MongoDB",
          completed: false,
        },
      ],
      (err, results) => {
        if (err) {
          return console.log("BAD");
        }
        console.log(results.ops);
      }
    );
  }
);
