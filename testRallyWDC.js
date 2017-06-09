(function () {
    var myConnector = tableau.makeConnector();

    myConnector.getSchema = function (schemaCallback) {
    var cols = [
        { id : "_refObjectName", alias : "Object Name", dataType : tableau.dataTypeEnum.string },
        { id : "_refObjectUUID", alias : "Object UUID", dataType : tableau.dataTypeEnum.string },
        { id : "FormattedID", alias : "Formatted ID", dataType : tableau.dataTypeEnum.string },
        { id : "_refIterationName", alias : "Iteration Name", dataType : tableau.dataTypeEnum.string },
        { id : "_refIterationUUID", alias : "Iteration UUID", dataType : tableau.dataTypeEnum.string },
        
        
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
                "_refObjectUUID": feat[i]._refObjectUUID,
                "_refObjectName": feat[i]._refObjectName,
                "FormattedID": feat[i].FormattedID,
                })
                if (feat[i].Iteration == null){
                     tableData.push({
                    "_refIterationName": feat[i].Iteration
                     })
                }
                else {
                 tableData.push({
                "_refIterationName": feat[i].Iteration._refObjectName,
                "_refIterationUUID": feat[i].Iteration._refObjectUUID,
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