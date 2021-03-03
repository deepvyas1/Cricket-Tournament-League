"use strict"

const userServices = require("./userServices");
const responseHelper = require("../utils/responseHelper");

module.exports = {

    //This controller is for the user to get details of all players playing in this tournament
    getPlayerList: function (req, res) {
        userServices.sendAllPlayersList(req.body, function (err, data, statusCode) {
            responseHelper(err, res, data, statusCode);
        })
    },

    // This controller is for the user to get details of all players in a particular team playing in this tournament
    getTeamPlayerList: function (req, res) {
        userServices.sendAllPlayersList(req.body, req.params,  function (err, data, statusCode) {
            responseHelper(err, res, data, statusCode);
        });
    },

    // This controller is for the user to get details of a particular player playing in this tournament
    getPlayerDetail: function (req, res) {
        userServices.sendPlayerDetail(req.body, req.params,  function (err, data, statusCode) {
            responseHelper(err, res, data, statusCode);
        });
    },

    // This controller is for the user to get details of all teams playing in this tournament
    getTeamsList: function (req, res) {
        userServices.sendAllTeamsList(req.body, function (err, data, statusCode) {
            responseHelper(err, res, data, statusCode);
        });
    },

    // This controller is for the user to get details of a team of a country playing in this tournament
    getTeamDetail: function (req, res) {
        userServices.sendTeamDetail(req.body, req.params, function (err, data, statusCode) {
            responseHelper(err, res, data, statusCode);
        });
    },

    //This controller is for the user to get details of all countries playing in this tournament
    getCountriesList: function (req, res) {
        userServices.sendCountriesList(req.body, function (err, data, statusCode) {
            responseHelper(err, res, data, statusCode);
        });
    },

    // This controller is for the user to get details of all venues in this tournament
    getVenuesList: function (req, res) {
        userServices.sendVenuesList(req.body, function (err, data, statusCode) {
            responseHelper(err, res, data, statusCode);
        });
    },

    //This controller is for the user to get details of all venues in a particular country in this tournament
    getCountryVenuesList: function (req, res) {
        userServices.sendCountryVenuesList(req.body, req.params, function (err, data, statusCode) {
            responseHelper(err, res, data, statusCode);
        });
    },

    // This controller is for the user to get details of all matches played in this tournament
    getMatchesList: function (req, res) {
        userServices.sendMatchesList(req.body, function (err, data, statusCode) {
            responseHelper(err, res, data, statusCode);
        });
    },

    // This controller is for the user to get details of a particular match played in this tournament
    getMatchSummary: function (req, res) {
        userServices.sendMatchSummary(req.body, req.params, function (err, data, statusCode) {
            responseHelper(err, res, data, statusCode);
        });
    },

    // This controller is for the user to get details summary of this tournament
    getTournamentSummary: function (req, res) {
        userServices.sendTournamentSummary(req.body, function (err, data, statusCode) {
            responseHelper(err, res, data, statusCode);
        });
    },
};