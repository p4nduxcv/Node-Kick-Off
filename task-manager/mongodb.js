/*
 ** C R U D
 */
const { MongoClient, ObjectID } = require("mongodb");

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

    // const updatePromise = DB.collection("users")
    //   .updateOne(
    //     {
    //       _id: new ObjectID("60e4fd5d2e5dd03b0c5e0fcb"),
    //     },
    //     {
    //       $set: {
    //         name: "pakaya",
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });

    DB.collection("tasks")
      .updateMany(
        {
          completed: true,
        },
        {
          $set: {
            completed: false,
          },
        }
      )
      .then((result) => {
        console.log(result.modifiedCount);
      })
      .catch((error) => {
        console.log(error);
      });
  }
);
