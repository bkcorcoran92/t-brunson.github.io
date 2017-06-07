var feat;
(function () {
    
    var myConnector = tableau.makeConnector();
    
    myConnector.getSchema = function (schemaCallback) {
    var cols = [
        
        { id : "_rallyAPIMajor", alias : "API Major", dataType : tableau.dataTypeEnum.float },
        { id : "_rallyAPIMinor", alias : "API Minor", dataType : tableau.dataTypeEnum.float },
        { id : "_refObjectUUID", alias : "Object UUID", dataType : tableau.dataTypeEnum.string },
        { id : "_objectVersion", alias : "Object Verzion", dataType : tableau.dataTypeEnum.float },
        { id : "_refObjectName", alias : "Object Name", dataType : tableau.dataTypeEnum.string },
        { id : "FormattedID", alias : "Formatted ID", dataType : tableau.dataTypeEnum.string },
        { id : "DirectChildrenCount", alias : "Children Count ", dataType : tableau.dataTypeEnum.float },
        { id : "Name", alias : "Name", dataType : tableau.dataTypeEnum.string },
        { id : "ScheduleState", alias : "Schedule State", dataType : tableau.dataTypeEnum.string },
        { id : "Blocked", alias : "Blocked", dataType : tableau.dataTypeEnum.boolean },
    ];

    var tableInfo = {
        id : "RallyData",
        alias : "Rally Data based on individual workspace/project",
        columns : cols
    };

    schemaCallback([tableInfo]);
};
   
    myConnector.getData = function(table, doneCallback) {
    $.getJSON("http://localhost:3000", function(resp) {
        var feat = resp,
            tableData = [];
console.log(feat);
        // Iterate over the JSON object
        for (var i = 0, len = feat.length; i < len; i++) {
             tableData.push({
                "_rallyAPIMajor": feat[i]._rallyAPIMajor,
                "_rallyAPIMinor": feat[i]._rallyAPIMinor,
                "_refObjectUUID": feat[i]._refObjectUUID,
                "_objectVersion": feat[i]._objectVersion,
                "_refObjectName": feat[i]._refObjectName,
                "FormattedID": feat[i].FormattedID,
                "DirectChildrenCount": feat[i].DirectChildrenCount,
                "Name": feat[i].Name,
                "ScheduleState": feat[i].ScheduleState,
                "Blocked": feat[i].Blocked,
                 
                 
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
