const   models = require("./models"),
        Express = require("express"),
        app = Express();

(async function() {
    let dbReady;
    while (!dbReady) {
        dbReady = await models.sequelize.sync().catch(e=>false);
        await new Promise(resolve=>setTimeout(resolve,1000));
    };
    console.log("Database successfully initialized");

    app.use("/test",(req,res)=>{res.send("I'm up!").end()});
    app.listen(80,()=>{console.log("API is listening on port 80");});
})();
