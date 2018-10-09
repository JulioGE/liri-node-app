var fs = require("fs");

fs.writeFile("random.txt","spotify-this-song, I Want It That Way", function(err) {

  if (err) {
    return console.log(err);
  }

  console.log("random.txt was updated!");
});

// import modules and packages
const request = require("request");
const Spotify = require("node-spotify-api");
const moment = require("moment");

// turn on dotenv to load up environment variables from .env file
require("dotenv").config()

var spotify = new Spotify(keys.spotify);

