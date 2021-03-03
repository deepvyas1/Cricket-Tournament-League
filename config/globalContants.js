"use strict"

const developmentConfig = require("../environment/development.json");

const environment = process.env.NODE_ENV;

let jwtAppSecret, jwtTokenExpiryDuration;
let mongoMainHost, mongoMainDB, mongoMainUser, mongoMainPass;

if(environment === "production") {

} else {
    mongoMainHost = developmentConfig.dbCredentials.mongo.host;
    mongoMainDB = developmentConfig.dbCredentials.mongo.mongo_db;
    mongoMainUser = developmentConfig.dbCredentials.mongo.username;
    mongoMainPass = developmentConfig.dbCredentials.mongo.password;
    jwtAppSecret = developmentConfig.jwtAppSecret;
    jwtTokenExpiryDuration = developmentConfig.jwtTokenExpiryDuration;
}

global.jwtAppSecret = jwtAppSecret;
global.jwtTokenExpiryDuration = jwtTokenExpiryDuration;

global.mongoMainHost = mongoMainHost;
global.mongoMainDB = mongoMainDB;
global.mongoMainUser = mongoMainUser;
global.mongoMainPass = mongoMainPass;
global.ENVIRONMENT = environment;