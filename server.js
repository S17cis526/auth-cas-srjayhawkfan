/** server.js
 * Server for a CAS client
 */

// Constants
const PORT = 3001;

// Requires
var fs = require('fs');
var https = require('https');
var express = require('express');

var options = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
}




var server = https.createServer(options, app)






// The Express app
var app = express();

// Serve files from public folder
app.use(express.static('public'));

// Start the server
server.listen(PORT, function(){
  console.log(PORT);
});
