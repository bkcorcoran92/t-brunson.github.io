(function() {
myConnector.getData = function(table, doneCallback) {
        $.getJSON("http://localhost:8888/", function(resp) {
            var feat = resp.features,
                tableData = [];

            // Iterate over the JSON object
            for (var i = 0, len = feat.length; i < len; i++) {
                tableData.push({
                    "id": feat[i].FormattedID,
                });
            }

            table.appendRows(tableData);
            doneCallback();
            console.log(tableData);
        });
    };
      $(document).ready(function() {
        $("#submitButton").click(function() {
        console.log(tableData);
        
        }
        )
      }
        )
}