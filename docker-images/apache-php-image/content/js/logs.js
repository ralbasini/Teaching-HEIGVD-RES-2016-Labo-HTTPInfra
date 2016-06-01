$(function() {
        console.log("Loading logs...");

        function loadLogs() {
                $.getJSON( "/api/students/", function( logs ) {
                        console.log(logs);
                        var message = "No logs to display...";
                        if ( logs.length > 0 ) {
                                message = "IP: " + logs[0].ipv4 + "\r\nDate: " + logs[0].date;
                        }
                        $("#about").text(message);
                });
        };

        loadLogs();

        setInterval( loadLogs, 2000 );

});
