const request = require("request-promise-native");

(async function() {
    let apiReady = await request("http://api:80").catch(e=>false);
    while (!apiReady) {
        apiReady = await request("http://api:80/test").catch(e=>false);
        await new Promise(resolve=>setTimeout(resolve,1000));
    }
    console.log("bot is up and running!");
})();
