"use strict"

const playerModel = require("../models/playerModel").Player;
const matchModel = require("../models/matchModel");
const playerPerformace = require("../models/playerPerformanceModel");
const teamModel = require("../models/teamModel");
const venueModel = require("../models/venueModel");
const countryModel = require("../models/countryModel");
const responseMessage = require("../utils/responseMessage");

module.exports = {

    //This service is for the user to get details of all players playing in this tournament
    sendAllPlayersList: async function (body, callback) {
        console.log("INFO ::: body recieved: "+ JSON.stringify(body));
        let response;
        try{
            const playersData = await playerModel.find().select("-_id");
            if(playersData) {
                response = new responseMessage.GenericSuccessMessage();
                return callback(null, playersData, response.code);
            }
            response = responseMessage.noDataAvailable;
            return callback(null, response, response.code);
        } catch(err) {
            console.log("ERROR ::: Error in sendAllPlayersList: ", err);
            return callback(null, err, err.code);
        }
    },

    // This controller is for the user to get details of all players in a particular team playing in this tournament
    sendTeamPlayersList: async function (body, params, callback) {
        console.log("INFO ::: body recieved: "+ JSON.stringify(body));
        let response;
        try{
            const countryId = params.countryId;
            if(!countryId) {
                console.log("Miising Info ::: countryId: "+countryId);
                response = responseMessage.incorrectPayload;
                return callback(null, response, response.code);
            }
            const playersData = await playerModel.find({countryId});
            if(playersData) {
                response = new responseMessage.GenericSuccessMessage();
                return callback(null, playersData, response.code);
            }
            response = responseMessage.noDataAvailable;
            return callback(null, response, response.code);
        } catch(err) {
            console.log("ERROR ::: Error in sendTeamPlayersList: ", err);
            return callback(null, err, err.code);
        }
    },

    // This service is for the user to get details of a particular player playing in this tournament
    sendPlayerDetail: async function (body, params, callback) {
        console.log("INFO ::: body recieved: "+ JSON.stringify(body));
        let response;
        try{
            const playerId = params.id;
            if(!playerId) {
                console.log("Miising Info ::: countryId: "+playerId);
                response = responseMessage.incorrectPayload;
                return callback(null, response, response.code);
            }
            const playersData = await playerModel.find({_id: playerId});
            if(playersData) {
                response = new responseMessage.GenericSuccessMessage();
                return callback(null, playersData, response.code);
            }
            response = responseMessage.noDataAvailable;
            return callback(null, response, response.code);
        } catch(err) {
            console.log("ERROR ::: Error in sendPlayerDetail: ", err);
            return callback(null, err, err.code);
        }
    },

    // This service is for the user to get details of all teams playing in this tournament
    sendAllTeamsList: async function (body, callback) {
        console.log("INFO ::: body recieved: "+ JSON.stringify(body));
        let response;
        try{
            const teamsData = await teamModel.find().populate('listOfPlayers', 'name -_id');
            if(teamsData) {
                response = new responseMessage.GenericSuccessMessage();
                return callback(null, teamsData, response.code);
            }
            response = responseMessage.noDataAvailable;
            return callback(null, response, response.code);
        } catch(err) {
            console.log("ERROR ::: Error in sendAllTeamsList: ", err);
            return callback(null, err, err.code);
        }
    },

    // This service is for the user to get details of a team of a country playing in this tournament
    sendTeamDetail: async function (body, params, callback) {
        console.log("INFO ::: body recieved: "+ JSON.stringify(body));
        let response;
        try{
            const countryId = params.countryId;
            if(!countryId) {
                console.log("Miising Info ::: teamId: "+countryId);
                response = responseMessage.incorrectPayload;
                return callback(null, response, response.code);
            }
            const teamsData = await teamModel.find({countryId}).populate('listOfPlayers', 'name -_id');
            if(teamsData) {
                response = new responseMessage.GenericSuccessMessage();
                return callback(null, teamsData, response.code);
            }
            response = responseMessage.noDataAvailable;
            return callback(null, response, response.code);
        } catch(err) {
            console.log("ERROR ::: Error in sendAllTeamsList: ", err);
            return callback(null, err, err.code);
        }
    },

    //This service is for the user to get details of all countries playing in this tournament
    sendCountriesList: async function (body, callback) {
        console.log("INFO ::: body recieved: "+ JSON.stringify(body));
        let response;
        try{
            const countriesData = await countryModel.find().select("-_id");
            if(countriesData) {
                response = new responseMessage.GenericSuccessMessage();
                return callback(null, countriesData, response.code);
            }
            response = responseMessage.noDataAvailable;
            return callback(null, response, response.code);
        } catch(err) {
            console.log("ERROR ::: Error in sendAllTeamsList: ", err);
            return callback(null, err, err.code);
        }
    },

    // This service is for the user to get details of all venues in this tournament
    sendVenuesList: async function (body, callback) {
        console.log("INFO ::: body recieved: "+ JSON.stringify(body));
        let response;
        try{
            const venuesData = await venueModel.find().select("-_id");
            if(venuesData) {
                response = new responseMessage.GenericSuccessMessage();
                return callback(null, venuesData, response.code);
            }
            response = responseMessage.noDataAvailable;
            return callback(null, response, response.code);
        } catch(err) {
            console.log("ERROR ::: Error in sendAllTeamsList: ", err);
            return callback(null, err, err.code);
        }
    },

    //This service is for the user to get details of all venues in a particular country in this tournament
    sendCountryVenuesList: async function (body, params, callback) {
        console.log("INFO ::: body recieved: "+ JSON.stringify(body));
        let response;
        try{
            const countryId = params.countryId;
            if(!countryId) {
                console.log("Miising Info ::: teamId: "+countryId);
                response = responseMessage.incorrectPayload;
                return callback(null, response, response.code);
            }
            const countryData = await countryModel.findOne({name: countryId});
            if(countryData){
                const venuesData = await venueModel.find({countryId}).select("-_id");
                if(venuesData) {
                    response = new responseMessage.GenericSuccessMessage();
                    return callback(null, venuesData, response.code);
                }
                response = responseMessage.noDataAvailable;
                return callback(null, response, response.code);
            } else {
                response = responseMessage.missingCountry;
                return callback(null, response, response.code);
            }
        } catch(err) {
            console.log("ERROR ::: Error in sendAllTeamsList: ", err);
            return callback(null, err, err.code);
        }
    },

    // This service is for the user to get details of all matches played in this tournament
    sendMatchesList: async function (body, callback) {
        console.log("INFO ::: body recieved: "+ JSON.stringify(body));
        let response;
        try{
            const matchesData = await matchModel.find().select("-_id");
            if(matchesData){
                    response = new responseMessage.GenericSuccessMessage();
                    return callback(null, matchesData, response.code);
            } else {
                response = responseMessage.noDataAvailable;
                return callback(null, response, response.code);
            }
        } catch(err) {
            console.log("ERROR ::: Error in sendAllTeamsList: ", err);
            return callback(null, err, err.code);
        }
    },

    // This service is for the user to get details of a particular match played in this tournament
    sendMatchSummary: async function (body, params, callback) {
        console.log("INFO ::: body recieved: "+ JSON.stringify(body));
        let response;
        try{
            const matchId = params.matchId;
            if(!matchId) {
                console.log("Miising Info ::: matchId: "+matchId);
                response = responseMessage.incorrectPayload;
                return callback(null, response, response.code);
            }
            const matchData = await matchModel.find({_id: matchId}).select("-_id");
            if(matchData){
                    response = new responseMessage.GenericSuccessMessage();
                    return callback(null, matchData, response.code);
            } else {
                response = responseMessage.noDataAvailable;
                return callback(null, response, response.code);
            }
        } catch(err) {
            console.log("ERROR ::: Error in sendAllTeamsList: ", err);
            return callback(null, err, err.code);
        }
    },

    // This service is for the user to get details summary of this tournament
    sendTournamentSummary: async function (body, callback) {
        console.log("INFO ::: body recieved: "+ JSON.stringify(body));
        let response;
        try{
            const teamData = await teamModel.find().select("-_id").sort({totalMatchesWon: 1});
            if(teamData){
                    response = new responseMessage.GenericSuccessMessage();
                    return callback(null, teamData, response.code);
            } else {
                response = responseMessage.noDataAvailable;
                return callback(null, response, response.code);
            }
        } catch(err) {
            console.log("ERROR ::: Error in sendAllTeamsList: ", err);
            return callback(null, err, err.code);
        }
    },
};