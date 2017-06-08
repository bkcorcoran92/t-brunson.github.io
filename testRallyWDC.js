(function () {
    var myConnector = tableau.makeConnector();

    myConnector.getSchema = function (schemaCallback) {
    var cols = [
         { id : "FormattedID", alias : "Formatted ID", dataType : tableau.dataTypeEnum.string },
         { id : "Name", alias : "Name", dataType : tableau.dataTypeEnum.string },

    ];

    var tableInfo = {
        id : "RallyData",
        alias : "Import of Rally Data",
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
                "FormattedID": feat[i].FormattedID,
                "Name": feat[i]._refObjectName,
                "_objectVersion": feat[i]._objectVersion,
                "_refObjectUUID": feat[i]._refObjectUUID,
                "_rallyAPIMajor": feat[i]._rallyAPIMajor,
                "_rallyAPIMinor": feat[i]._rallyAPIMinor,
                "ScheduleState": feat[i].ScheduleState,
                "Blocked": feat[i].Blocked,
                "DirectChildrenCount": feat[i].DirectChildrenCount,
                "_refObjectName": feat[i]._refObjectName,
            });
        }

        table.appendRows(tableData);
        doneCallback();
    });
};

    tableau.registerConnector(myConnector);
    $(document).ready(function () {
    $("#submitButton").click(function () {
        tableau.connectionName = "RallyData";
        tableau.submit();
    });
});
})();