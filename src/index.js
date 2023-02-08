"use strict";
exports.__esModule = true;
var express = require("express");
var middleware_1 = require("./middleware");
var fetchOrgData_1 = require("./routes/fetchOrgData");
var addOrg_1 = require("./routes/addOrg");
var verifyUser_1 = require("./routes/verifyUser");
var updateOrg_1 = require("./routes/updateOrg");
var app = express();
app.use(verifyUser_1.verifyUser);
app.use(middleware_1["default"]);
app.use(fetchOrgData_1.getOrgData);
app.use(addOrg_1.addOrg);
app.use(updateOrg_1.updateOrg);
app.listen(3060, function () {
    console.log("Server listening on 3060");
});
