(function () {
    var myConnector = tableau.makeConnector();

    myConnector.getSchema = function (schemaCallback) {
        //defining schema to place data
        
    var object_cols = [
        { id : "ObjectName", alias : "Object Name", dataType : tableau.dataTypeEnum.string },
    
        { id : "FormattedID", alias : "Formatted ID", dataType : tableau.dataTypeEnum.string },
        
        { id : "ObjectNotes", alias : "Object Notes", dataType : tableau.dataTypeEnum.string }
        
                        ];
        
    var objectTable = {
        id : "RallyObjectData",
        alias : "Object Data",
        columns :  object_cols
    };
        //iteration data
        
    var iteration_cols =[
        { id : "IterationName", alias : "Iteration Name", dataType : tableau.dataTypeEnum.string },
        
        { id : "IterationUUID", alias : "Iteration UUID", dataType : tableau.dataTypeEnum.string },
        
        
        { id : "StartDate", alias : "Iteation Start Date", dataType : tableau.dataTypeEnum.string },
        
        { id : "EndDate", alias : "Iteation End Date", dataType : tableau.dataTypeEnum.string },
        
        
        { id : "PlanEstimate", alias : "Iteration Plan Estimate", dataType : tableau.dataTypeEnum.float },
        
        { id : "State", alias : "Iteration State", dataType : tableau.dataTypeEnum.string },
        
        { id : "PlannedVelocity", alias : "Iteration PlannedVelocity", dataType : tableau.dataTypeEnum.string },
        
        { id : "TaskActualTotal", alias : "Iteration TaskActualTotal", dataType : tableau.dataTypeEnum.float },
        
        { id : "TaskEstimateTotal", alias : "Iteration TaskEstimateTotal", dataType : tableau.dataTypeEnum.float},
        
        { id : "TaskRemainingTotal", alias : "Iteration TaskRemainingTotal", dataType : tableau.dataTypeEnum.float },
        
        { id : "UserIterationCapacities", alias : "Iteration UserIterationCapacities", dataType : tableau.dataTypeEnum.string }
        
        
        
        
                        ];
        
    var iteratoinTable = {
        id : "RallyIterationData",
        alias : "Iteratoin Data",
        columns :  iteration_cols
    };

    var project_cols=[
        { id : "ProjectUUID", alias : "Iteation's Project ID", dataType : tableau.dataTypeEnum.string },
        
        { id : "ProjectName", alias : "Iteation's Project Name", dataType : tableau.dataTypeEnum.string },
        
        { id : "ProjectName", alias : "Iteation's Project Name", dataType : tableau.dataTypeEnum.string },
        
        { id : "ParentName", alias : "Iteation's Parent Name", dataType : tableau.dataTypeEnum.string },
        
        { id : "ParentUUID", alias : "Iteation's Project UUID", dataType : tableau.dataTypeEnum.string }
                    ];
    
    var projectTable ={
        id : "ProjectData",
        alias : "Project Data",
        columns : project_cols
    };
    
    
    

    schemaCallback([objectTable, iteratoinTable, projectTable]);
};

    myConnector.getData = function(table, doneCallback) {
    
    $.getJSON("http://localhost:3000", function(resp) {
        var feat = resp,
            tableData = [];

        // Iterate over the JSON object
        for (var i = 0, len = feat.length; i < len; i++) {
            if (feat[i].Iteration == null){
                
                     tableData.push({
                "ObjectName": feat[i]._refObjectName,
                
                                    })
                                            }
            
             if (feat[i].Iteration !== null){
            tableData.push({
               //object calls
                "ObjectName": feat[i]._refObjectName,

                "ObjectUUID": feat[i]._refObjectUUID,
                "ObjectNotes": feat[i].Notes,
                
                //Iteration calls
                "IterationName": feat[i].Iteration._refObjectName,
                "IterationUUID": feat[i].Iteration._refObjectUUID,
                "StartDate": feat[i].Iteration.StartDate,
                "EndDate": feat[i].Iteration.EndDate,
                "PlannedVelocity": feat[i].Iteration.PlannedVelocity,
                "TaskActualTotal": feat[i].Iteration.TaskActualTotal,
                "TaskEstimateTotal": feat[i].Iteration.TaskEstimateTotal,
                "TaskRemainingTotal": feat[i].Iteration.TaskRemainingTotal,
                "PlanEstimate": feat[i].Iteration.PlanEstimate,
                "UserIterationCapacities": feat[i].Iteration.UserIterationCapacities.Count,
                "State": feat[i].Iteration.State,
                
                
                
                
                
                //project calls
                "ProjectUUID": feat[i].Project._refObjectUUID,
                "ProjectName": feat[i].Project._refObjectName,
                "ParentName": feat[i].Iteration.Project.Parent._refObjectName,
                "ParentUUID": feat[i].Iteration.Project.Parent._refObjectUUID
            
            })
                                            }
                                                        }
            

        table.appendRows(tableData);
        doneCallback();
    });
};

    tableau.registerConnector(myConnector);
    $(document).ready(function () {
    $("#submitButton").click(function () {
        tableau.connectionName = "USGS Earthquake Feed";
        tableau.submit();
    });
});
})();