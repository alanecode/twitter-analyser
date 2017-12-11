var Twitter = require('twitter');
var fs = require('fs');

var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
  });

client.get("search/tweets", {q: "#agu17"}, function(error, tweets, response) {
         console.log(tweets);

         // write JSON file to disk
         fs.writeFile("myjsonfile.json", JSON.stringify(tweets), 'utf8',
         function(error) {
           if (error) throw error;
           console.log("wrote JSON file.");
         });
       });
