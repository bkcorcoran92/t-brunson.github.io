(function() {
myConnector.getData = function(table, doneCallback) {
        
        $.getJSON("http://localhost:8888", function(data){
            document.write(data);
    };
      $(document).ready(function() {
        $("#submitButton").click(function() {
        console.log(tableData);
        }
                                 );
        });
)}
});