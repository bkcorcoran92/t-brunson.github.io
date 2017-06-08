(function () {
    var myConnector = tableau.makeConnector();

   myConnector.getSchema = function (schemaCallback) {
    var cols = [
        { id : "FormattedID", alias : "Formatted ID", dataType : tableau.dataTypeEnum.string }   
    ];

    var tableInfo = {
        id : "RallyData",
        alias : "Rally Data Import",
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
                "id": feat[i].id,
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