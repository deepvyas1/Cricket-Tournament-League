"use strict"

const responseHelper = require("../utils/responseHelper");
const adminServices = require("./adminServices");

module.exports = {

    //This controller is for admin to insert new country details
    insertNewCountry: function (req, res) {
        adminServices.postNewCountry(req.body, function (err, data, statusCode) {
            responseHelper(err, res, data, statusCode);
        })
    },

    //This controller is for admin to insert new venue in acountry details
    insertNewVenue: function (req, res) {
        adminServices.postNewVenue(req.body, function (err, data, statusCode) {
            responseHelper(err, res, data, statusCode);
        })
    },

    //This controller is for admin to insert new team details
    insertNewTeam: function (req, res) {
        adminServices.postNewTeam(req.body, function (err, data, statusCode) {
            responseHelper(err, res, data, statusCode);
        })
    },

    //This controller is for admin to insert new player details
    insertNewPlayer: function (req, res) {
        adminServices.postNewPlayer(req.body, function (err, data, statusCode) {
            responseHelper(err, res, data, statusCode);
        })
    },

    //This controller is for admin to insert new match details
    insertNewMatch: function (req, res) {
        adminServices.postNewMatch(req.body, function (err, data, statusCode) {
            responseHelper(err, res, data, statusCode);
        })
    },

    //This controller is for admin to insert details about a player's performance in a match
    insertNewPlayerMatchPerformance: function (req, res) {
        adminServices.postPlayerMatchPerformance(req.body, function (err, data, statusCode) {
            responseHelper(err, res, data, statusCode);
        })
    }
};