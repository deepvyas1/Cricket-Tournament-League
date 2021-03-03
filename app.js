/**
 * Created by Deep Vyas
 */

"use strict";
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const compression = require("compression");
const expressValidator = require("express-validator");
const cors = require("cors");
const helmet = require("helmet");

const app = (module.exports = express());

const mongoose = require("mongoose");

// Setting global variables, Please don't move this. Please add dependency after this line
require("./config/globalContants");

const configDB = require("./config/db");

// configuration ===============================================================
mongoose.Promise = global.Promise;

// let options = {useNewUrlParser: true, useFindAndModify: false};
const options = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
};
mongoose.mainConnection = mongoose.createConnection(
    configDB.mongoMainUrl,
    options
);

//------------------------------------------- MAIN DB CONNECTION EVENTS-----------------------------------------------//
// When successfully connected
mongoose.mainConnection.on("connected", function () {
    console.log(configDB.mongoMainUrl);
    console.log("Connected to main MongoDB ");
    mongoose.set("debug", true);
});

// If the connection throws an error
mongoose.mainConnection.on("error", function (err) {
    console.error("Mongoose main connection error: " + JSON.stringify(err));
});

// When the connection is disconnected
mongoose.mainConnection.on("disconnected", function () {
    console.log("Mongoose main connection disconnected");
});

//--------------------------------------PROCESS EVENTS CONNECTION CLOSURES--------------------------------------------//
// If the Node process ends using SIGINT, close both the Mongoose connection
process.on("SIGINT", function () {
    mongoose.mainConnection.close(function () {
        console.log(
            "Mongoose main connection disconnected through app termination"
        );
        process.exit(0);
    });
});

// If the Node process exits using exit, close both the Mongoose connection
process.on("exit", function () {
    mongoose.mainConnection.close(function () {
        console.log(
            "Mongoose main connection disconnected through app termination"
        );
        process.exit(0);
    });
});

app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: false}));
app.use(cookieParser());


// Compress all routes and the response.
app.use(compression());

// Helmet helps you secure your Express apps by setting various HTTP headers
app.use(helmet());

global.applicationRootPath = path.resolve(__dirname);

app.use("/", express.static(path.join(__dirname, "public")));

app.options("*", cors());
app.use(cors());

require("./routes")(app);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    let err = new Error("Not Found");
    err.status = 404;
    next(err);
});

// error handlers
// development error handler will print stacktrace
if (app.get("env") === "development") {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.json({
            message: err.message,
            error: err,
        });
    });
}

// production error handler no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    next(err);
});
