var express = require('express'); // need to install express - npm install express --save
var app = express(); 

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var rally = require('rally'), //need to install rally - npm install rally --save
queryUtils = rally.util.query,
restApi = rally({
    //user: '', //required if no api key, defaults to process.env.RALLY_USERNAME
    //pass: '', //required if no api key, defaults to process.env.RALLY_PASSWORD
    apiKey: '_C6RyrDFTTxe3Kc3dDdIKjWhRYsD6eU43lY56Cp1Qxo', //preferred, required if no user/pass, defaults to process.env.RALLY_API_KEY
    apiVersion: 'v2.0', //this is the default and may be omitted
    server: 'https://rally1.rallydev.com/',  //this is the default and may be omitted
    requestOptions: {
        headers: {
            'X-RallyIntegrationName': 'My cool node.js program',  //while optional, it is good practice to
            'X-RallyIntegrationVendor': 'My company',             //provide this header information
            'X-RallyIntegrationVersion': '1.0'                    
        }
        //any additional request options (proxy options, timeouts, etc.)     
    }
});

var stuff;
restApi.query({
    type: 'hierarchicalrequirement', //the type to query
    start: 1, //the 1-based start index, defaults to 1
    pageSize: 2, //the page size (1-200, defaults to 200)
    limit: 10, //the maximum number of results to return- enables auto paging
    order: 'Rank', //how to sort the results
    fetch: ['FormattedID', 'Name', 'ScheduleState', 'Children'], //the fields to retrieve
    //query: queryUtils.where('DirectChildrenCount', '>', 0), //optional filter
    scope: {
        workspace: '/workspace/4203336782', //specify to query entire workspace
        project: '/project/34067667823' //specify to query a specific project
        //up: false //true to include parent project results, false otherwise
        //down: true //true to include child project results, false otherwise
    },
    requestOptions: {} //optional additional options to pass through to request
}, function(error, result) {
    if(error) {
        console.log(error);
    } else {
        console.log(result.Results);
        stuff = result.Results;
    }
});

app.get('/', function (req, res) {
  res.send(stuff);
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

app.post('/', function(req, res, next) {
 // Handle the post for this route
});

    