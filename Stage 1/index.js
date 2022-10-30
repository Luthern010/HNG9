//  A BASIC Node server

const http = require('http');

const server = http.createServer(function(req,res){

     res.setHeader('content-type', 'application/json');
     res.setHeader('Access-Control-Allow-Origin', "*");
     res.writeHead(200); //status code HTTP 200 / OK

     let dataObj = {
          "slackUsername": "Luthern",
          "backend": true,
          "Age": 27,
          "bio": "A techie polyglot"
        }
        let data = JSON.stringify(dataObj);
        res.end(data);
});

server.listen(5001, function(){
     console.log('Listening on port 5001');
})