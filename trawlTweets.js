/*
Make a call to the twitter API, continuously retrieving tweets from the public
stream which conform to rules specified in the config.json file. These retrieved
have been identified as interesting for subsequent analysis, and are written to
a sqlite database.
*/
var Twitter = require('twitter');
var fs = require('fs');

function readConfig() {
  return JSON.parse(fs.readFileSync('config.json', 'utf8'));
}

/*
Setup our client object. Remember to set the shell environment variables
used below to appropriate values corresponding to your credentials.
*/

var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
  });

function writeSearchToJSON() {
  client.get("search/tweets", {q: "#agu17"}, function(error, tweets, response) {
            console.log(tweets);

            // write JSON file to disk
           fs.writeFile("myjsonfile.json", JSON.stringify(tweets), 'utf8',
           function(error) {
             if (error) throw error;
             console.log("wrote JSON file.");
           });
         });
       }

writeSearchToJSON()

//console.log(readConfig().leaders)
