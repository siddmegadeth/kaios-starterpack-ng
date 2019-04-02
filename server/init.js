(function() {


    require("./modules");
    require("./middleware");

    http.createServer(app).listen(app.get("PORT"), function() {
        console.log("KaiOS Server Started :");
    });

})()