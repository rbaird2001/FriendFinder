const path = require("path");
//req will hold an object with all the detail about the request
//res will hold an object with all the detail about the resonse
module.exports = function (app) {
    //default route
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    //survey route
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
}

