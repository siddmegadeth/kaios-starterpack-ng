(function() {


    require("./init/index"); // Call And Initialize ALl App Level Modules

    http.listen(app.get("PORT"), function() {
        console.log("KaiOS Server Started :");
    });

})()
