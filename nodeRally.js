//Server Stuf
var express = require('express'); // need to install express - npm install 
var app = express(); 
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

//Login To Rally
var rally = require('rally'), //need to install rally - npm install rally 
    
queryUtils = rally.util.query,
    
//Enter Info
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

//Begin Query
var ResultCount;

//Getting Count of data to query
restApi.query({
    type: 'Iteration', //the type to query
    scope: {
        workspace: '/workspace/4203336782', //specify to query entire workspace
        project: '/project/34067667823', //specify to query a specific project
        
        up: false, //true to include parent project results, false otherwise
        down: true //true to include child project results, false otherwise
    }
                }, 
function(error, result){
    if(error) {
        console.log(error);
    } 
    else {
        console.log(parseFloat(result.TotalResultCount));
        ResultCount = parseFloat(result.TotalResultCount );
    }
});

//Getting hierarchicalrequirement JSON
var hierarchicalrequirementJSON;
restApi.query({
    type: 'hierarchicalrequirement', //the type to query
    start: 1, //the 1-based start index, defaults to 1
    //pageSize: , //the page size (1-200, defaults to 200)
    limit: ResultCount, //the maximum number of results to return- enables auto paging
    //order: 'Rank', //how to sort the results
    fetch: [//User Story Fields'
    'FormattedID','PlanEstimate','Rank','ScheduleState','Tags','Type','WorkState','AcceptedDate','IsTestable','Capability','RundDate','ObjectID','DirectChildrenCount','Name','Iteration','Parent','Owner','Release','c_type',
    ],
    scope: {
        workspace: '/workspace/4203336782', //specify to query entire workspace
        project: '/project/34067667823', //specify to query a specific project
        
        up: false, //true to include parent project results, false otherwise
        down: true, //true to include child project results, false otherwise
    },
    requestOptions: {} //optional additional options to pass through to request
}, 
function(error, result) {
    if(error) {
        console.log(error);
    } else {
        console.log(result.Results);
        hierarchicalrequirementJSON = result.Results;
    }
});

//Getting Project JSON
var projectJSON;
restApi.query({
    type: 'Project', //the type to query
    start: 1, //the 1-based start index, defaults to 1
    //pageSize: , //the page size (1-200, defaults to 200)
    limit: ResultCount, //the maximum number of results to return- enables auto paging
    //order: 'Rank', //how to sort the results
    fetch: [//Project Fields'
                'ObjectID' ,'Name','Parent','Workspace',
    ],
    scope: {
        workspace: '/workspace/4203336782', //specify to query entire workspace
        project: '/project/34067667823', //specify to query a specific project
        
        up: false, //true to include parent project results, false otherwise
        down: true, //true to include child project results, false otherwise
    },
    requestOptions: {} //optional additional options to pass through to request
}, 
function(error, result) {
    if(error) {
        console.log(error);
    } else {
        console.log(result.Results);
        projectJSON = result.Results;
    }
});

//Getting Iteration JSON
var iterationJSON;
restApi.query({
    type: 'Iteration', //the type to query
    start: 1, //the 1-based start index, defaults to 1
    //pageSize: , //the page size (1-200, defaults to 200)
    limit: ResultCount, //the maximum number of results to return- enables auto paging
    //order: 'Rank', //how to sort the results
    fetch: [//Iteation Fields
            'Iteration','StartDate','EndDate','PlannedVelocity','State','TaskActualTotal','TaskEstimateTotal','TaskRemainingTotal','Sequence','PlanEstimate','ObjectID','Name','Project',
 
    ],
    scope: {
        workspace: '/workspace/4203336782', //specify to query entire workspace
        project: '/project/34067667823', //specify to query a specific project
        
        up: false, //true to include parent project results, false otherwise
        down: true, //true to include child project results, false otherwise
    },
    requestOptions: {} //optional additional options to pass through to request
}, 
function(error, result) {
    if(error) {
        console.log(error);
    } else {
        console.log(result.Results);
        iterationJSON = result.Results;
    }
});

//Getting Release JSON
var releaseJSON;
restApi.query({
    type: 'Release', //the type to query
    start: 1, //the 1-based start index, defaults to 1
    //pageSize: , //the page size (1-200, defaults to 200)
    limit: ResultCount, //the maximum number of results to return- enables auto paging
    //order: 'Rank', //how to sort the results
    fetch: [//Release Fields'
    'PlanEstimate','Rank','ScheduleState','ObjectID','Name','Accepted','Project','ReleaseStartDate','ReleaseDate','PlannedVelocity','State','TaskActualTotal','TaskEstimateTotal','TaskRemainingTotal',
            
    ],
    scope: {
        workspace: '/workspace/4203336782', //specify to query entire workspace
        project: '/project/34067667823', //specify to query a specific project
        
        up: false, //true to include parent project results, false otherwise
        down: true, //true to include child project results, false otherwise
    },
    requestOptions: {} //optional additional options to pass through to request
}, 
function(error, result) {
    if(error) {
        console.log(error);
    } else {
        console.log(result.Results);
        releaseJSON = result.Results;
    }
});

//Getting defect JSON
var defectJSON;
restApi.query({
    type: 'Defect', //the type to query
    start: 1, //the 1-based start index, defaults to 1
    //pageSize: , //the page size (1-200, defaults to 200)
    limit: ResultCount, //the maximum number of results to return- enables auto paging
    //order: 'Rank', //how to sort the results
    fetch: [//User Story Fields'
    'FormattedID','PlanEstimate','ScheduleState','Tags','AcceptedDate','RundDate','ObjectID','Name','Iteration','State','Defects','SchedulableArtifact','ClosedDate','CreationDate','Environment','Priority','FoundBy','Tags','Requirement','Severity','Project','Release','Owner',

    ],
    scope: {
        workspace: '/workspace/4203336782', //specify to query entire workspace
        project: '/project/34067667823', //specify to query a specific project
        
        up: false, //true to include parent project results, false otherwise
        down: true, //true to include child project results, false otherwise
    },
    requestOptions: {} //optional additional options to pass through to request
}, 
function(error, result) {
    if(error) {
        console.log(error);
    } else {
        console.log(result.Results);
        defectJSON = result.Results;
    }
});

//Getting task JSON
var taskJSON;
restApi.query({
    type: 'Task', //the type to query
    start: 1, //the 1-based start index, defaults to 1
    //pageSize: , //the page size (1-200, defaults to 200)
    limit: ResultCount, //the maximum number of results to return- enables auto paging
    //order: 'Rank', //how to sort the results
    fetch: [//Task Fields*
            'Release','Project','State','Tags','Iteration','Tasks','Actuals','Estimate','ToDo','TimeSpent','TaskType','Owner','WorkProduct','LastUpdateDate','CreationDate','FormattedID',
            
    ],
    scope: {
        workspace: '/workspace/4203336782', //specify to query entire workspace
        project: '/project/34067667823', //specify to query a specific project
        
        up: false, //true to include parent project results, false otherwise
        down: true, //true to include child project results, false otherwise
    },
    requestOptions: {} //optional additional options to pass through to request
}, 
function(error, result) {
    if(error) {
        console.log(error);
    } else {
        console.log(result.Results);
        taskJSON = result.Results;
    }
});

//Getting ProtfolioItem JSON
var portfolioItemJSON;
restApi.query({
    type: 'PortfolioItem', //the type to query
    start: 1, //the 1-based start index, defaults to 1
    //pageSize: , //the page size (1-200, defaults to 200)
    limit: ResultCount, //the maximum number of results to return- enables auto paging
    //order: 'Rank', //how to sort the results
    fetch: [//PortfolioItem
           'Release','Tags','State','Parent','Project','ObjectID','FormattedID','Feature','PortfolioItemName','AcceptedLeafStoryCount','AcceptedLeafStoryPlaneEstimateTotal','ActualEndDate','ActualStartDate','InvestmentCategory','JobSize','LeafStoryCount','LeafStoryPlanestimateTotal','PercentDoneByStoryCount','PercentDoneByStoryPlanEstimate','PlannedEndDate','PlannedStartDate','PortfolioItemType','PreliminaryEstimate','UnEstimatedLeafStoryCount','RefinedEstimate','Description','EPMSid',
    ],
    scope: {
        workspace: '/workspace/4203336782', //specify to query entire workspace
        project: '/project/34067667823', //specify to query a specific project
        
        up: false, //true to include parent project results, false otherwise
        down: true, //true to include child project results, false otherwise
    },
    requestOptions: {} //optional additional options to pass through to request
}, 
function(error, result) {
    if(error) {
        console.log(error);
    } else {
        console.log(result.Results);
        portfolioItemJSON = result.Results;
    }
});

//Sending Data to Website
app.get('/', function (req, res) {
    //Combining JSON API Call Data
    res.json({userStory: hierarchicalrequirementJSON,iteration: iterationJSON, project: projectJSON, release: releaseJSON, defect: defectJSON, task: taskJSON, portfolioItem: portfolioItemJSON});
    //res.send(releaseJSON);
})
app.post('/', function(req, res, next) {
 // Handle the post for this route
});