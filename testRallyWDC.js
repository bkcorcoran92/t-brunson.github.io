(function () {
    var myConnector = tableau.makeConnector();

    myConnector.getSchema = function (schemaCallback) {
        //defining schema to place data
        
    var object_cols = [
        { id : "ObjectName", alias : "Object Name", dataType : tableau.dataTypeEnum.string },
    
        { id : "FormattedID", alias : "Formatted ID", dataType : tableau.dataTypeEnum.string }
        
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
        
        { id : "FormattedID", alias : "Formatted ID", dataType : tableau.dataTypeEnum.string },
        
        { id : "StartDate", alias : "Iteation Start Date", dataType : tableau.dataTypeEnum.string },
        
        { id : "EndDate", alias : "Iteation End Date", dataType : tableau.dataTypeEnum.string },
        
        { id : "ProjectUUID", alias : "Iteation's Project ID", dataType : tableau.dataTypeEnum.string },
        
        { id : "ProjectName", alias : "Iteation's Project Name", dataType : tableau.dataTypeEnum.string },
        
        { id : "ParentUUID", alias : "Iteation's Parent Name", dataType : tableau.dataTypeEnum.string },
        
        { id : "ParentName", alias : "Iteation's Parent Name", dataType : tableau.dataTypeEnum.string }
                        ];
        
    var iteratoinTable = {
        id : "RallyIterationData",
        alias : "Iteratoin Data",
        columns :  iteration_cols
    };

    

    schemaCallback([objectTable, iteratoinTable]);
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
                "FormattedID": feat[i].FormattedID,
                                    })
                                            }
            
             if (feat[i].Iteration !== null){
            tableData.push({
                "ObjectName": feat[i]._refObjectName,
                "FormattedID": feat[i].FormattedID,
                "ObjectUUID": feat[i]._refObjectUUID,
                "IterationName": feat[i].Iteration._refObjectName,
                "IterationUUID": feat[i].Iteration._refObjectUUID,
                "StartDate": feat[i].Iteration.StartDate,
                "EndDate": feat[i].Iteration.EndDate,
                "ProjectUUID": feat[i].Iteration.Project._refObjectUUID,
                "ProjectName": feat[i].Iteration.Project._refObjectName,
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