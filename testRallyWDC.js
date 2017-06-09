(function () {
    var myConnector = tableau.makeConnector();

    myConnector.getSchema = function (schemaCallback) {
    var cols = [
        { id : "ObjectName", alias : "Object Name", dataType : tableau.dataTypeEnum.string },
        { id : "ObjectUUID", alias : "Object UUID", dataType : tableau.dataTypeEnum.string },
        { id : "FormattedID", alias : "Formatted ID", dataType : tableau.dataTypeEnum.string },
        { id : "IterationName", alias : "Iteration Name", dataType : tableau.dataTypeEnum.string },
        { id : "IterationUUID", alias : "Iteration UUID", dataType : tableau.dataTypeEnum.string },
        { id : "ProjectName", alias : "Project Name", dataType : tableau.dataTypeEnum.string },
        { id : "ProjectUUID", alias : "Project UUID", dataType : tableau.dataTypeEnum.string },
        
        
    ];

    var tableInfo = {
        id : "RallyData",
        alias : "Rally Import Data",
        columns : cols
    };

    schemaCallback([tableInfo]);
};

    myConnector.getData = function(table, doneCallback) {
    $.getJSON("http://localhost:3000", function(resp) {
        var feat = resp,
            tableData = [];

        // Iterate over the JSON object
        for (var i = 0, len = feat.length; i < len; i++) {
            tableData.push({
                "ObjectUUID": feat[i]._refObjectUUID,
                "ObjectName": feat[i]._refObjectName,
                "FormattedID": feat[i].FormattedID,
                })
                if (feat[i].Iteration == null){
                     tableData.push({
                    "_refIterationName": feat[i].Iteration
                     })
                }
                else {
                 tableData.push({
                "ProjectName": feat[i].Project._refObjectName,
                "ProjectUUID": feat[i].Project._refObjectUUID,
                "IterationName": feat[i].Iteration._refObjectName,
                "IterationUUID": feat[i].Iteration._refObjectUUID,
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