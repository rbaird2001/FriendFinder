const express = require("express");
const path = require("path");

const app = express();
//console.log(app);

var PORT = process.env.PORT || 8080

app.use(express.urlencoded({extended: true}));
app.use(express.json());

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT,function(){
    console.log(`Web App is listening on PORT: ${PORT}`);
})


