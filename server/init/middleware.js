(function() {


    app.set("PORT", 3000 || process.env.PORT);
    app.set('host', process.env.NODE_IP || 'localhost');

    app.use(bodyParser.urlencoded({
        parameterLimit: 100000,
        limit: '50mb',
        extended: true,
        type: 'application/json'
    }));
    app.use("/", express.static("public"));




})()