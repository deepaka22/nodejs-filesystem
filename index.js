//  to create new folder in current directory
// app.get
// fs.mkdir("timestamp", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
// });

// Task

// Creating server from importing TPA package -  express

const express = require("express");

// var app is aggined to call express
const app = express();

// importing fs file from inbuilt package npm

const fs = require("fs");

// importing path in built method from npm
const path = require("path");

// server listens to the port
app.listen(9000, () => {
  console.log("Server started succesfully in local port: 9000");
});

// if we hit the server app.get() methods get information and logic

app.get("/time", (req, resp) => {
  const dates = new Date();

  const datestamp = dates.toUTCString().slice(0, -3);

  const directory = __dirname;

  // used to join the path, to avoid un-necessary spaces
  const pathJoin = path.join(directory, "timestamp");

  fs.writeFileSync(
    `${path.join(pathJoin, "date-time.txt")}`,
    datestamp,
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log("file created successfully");
      }
    }
  );

  const sendnote = path.join(pathJoin, "date-time.txt");

  resp.sendFile(sendnote);
});

//
