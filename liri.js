// turn on dotenv to load up environment variables from .env file
require("dotenv").config();

var keys = require("./keys.js");

// import modules and packages
var fs = require("fs");
var request = require("request");
var moment = require("moment");
var Spotify = require("node-spotify-api");
var Spotify = new Spotify(keys.spotify);

var spotify = new Spotify({
  id: "1d581025794f461c81204af467511bf4",
  secret: "86e791bc09d3440bb335645176a2f2e9"
});

function spotifythis(songName) {
  spotify.search({ type: "track", query: songName }, function(err, data) {
    if (err) {
      return console.log("Error occurred: " + err);
    }

    var songs = data.tracks.items;
    for (var i = 0; i < songs.length; i++) {
      var artists = songs[i].artists.map(function(artist) {
        return artist.name;
      });

      var name = songs[i].name;
      var album = songs[i].album.name;
      var previewLink = songs[i].preview_url;

      console.log(
        "Name: ${name} Album:${album} Artists: ${artists} Link: ${previewLink} "
      );
    }
  });
}
