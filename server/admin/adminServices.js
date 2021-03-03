"use strict"

const playerModel = require("../models/playerModel").Player;
const matchModel = require("../models/matchModel");
const playerPerformaceModel = require("../models/playerPerformanceModel");
const teamModel = require("../models/teamModel");
const venueModel = require("../models/venueModel");
const countryModel = require("../models/countryModel");
const responseMessage = require("../utils/responseMessage");

module.exports = {

    // This is the service to insert details about new country
    postNewCountry: async function (body, callback) {
        console.log("INFO ::: body recieved: "+JSON.stringify(body));
        let response;
        try{
            const countryName = body.countryName;
            if(!countryName) {
                console.log("Missing Info ::: countryName: "+countryName);
                response = responseMessage.incorrectPayload;
                return callback(null, response, response.code);
            }
            const countryData = new countryModel ({
                name: countryName
            });
            const result = await countryData.save();
            if(result) {
                response = new responseMessage.GenericSuccessMessage();
                return callback(null, response, response.code);
            }
            response = new responseMessage.GenericFailureMessage();
            return callback(null, response, response.code);
        }catch(err) {
            console.log("ERROR ::: Error in postNewCountry Service: ", err);
            response = new responseMessage.ErrorInQueryingDB();
            return callback(null, response, response.code);
        }
    },

    // This is the service to insert details about new venue
    postNewVenue: async function (body, callback) {
        console.log("INFO ::: body recieved: "+JSON.stringify(body));
        let response;
        try{
            const countryName = body.countryName;
            const city = body.city;
            const venueName = body.name;
            if(!countryName || !city ||!venueName) {
                console.log("Missing Info ::: countryName: "+countryName+ ". city :"+city+". venueName: "+venueName);
                response = responseMessage.incorrectPayload;
                return callback(null, response, response.code);
            }

            //This query is to get details about the country
            const countryData = await countryModel.findOne({name: countryName});
            if(countryData) {
                const venueData = new venueModel({
                    countryId: countryData._id,
                    city: city,
                    name: venueName
                });
                const result = await venueData.save();
                if(result) {
                    response = new responseMessage.GenericSuccessMessage();
                    return callback(null, response, response.code);
                }
                response = new responseMessage.GenericFailureMessage();
                return callback(null, response, response.code);
            } else {
                response = responseMessage.missingCountry;
                return callback(null, response, response.code);
            }
        }catch(err) {
            console.log("ERROR ::: Error in postNewCountry Service: ", err);
            response = new responseMessage.ErrorInQueryingDB();
            return callback(null, response, response.code);
        }
    },

    // This is the service to insert details about new team
    postNewTeam: async function (body, callback) {
        console.log("INFO ::: body recieved: "+JSON.stringify(body));
        let response;
        try{
            const countryName = body.countryName;
            if(!countryName) {
                console.log("Missing Info ::: countryName: "+countryName);
                response = responseMessage.incorrectPayload;
                return callback(null, response, response.code);
            }

            // This is the query to get details about the country
            const countryData = await countryModel.findOne({name: countryName});
            if(countryData) {
                const teamData = new teamModel({
                    countryId: countryData._id,
                });
                const result = await teamData.save();
                if(result) {
                    response = new responseMessage.GenericSuccessMessage();
                    return callback(null, response, response.code);
                }
                response = new responseMessage.GenericFailureMessage();
                return callback(null, response, response.code);
            } else {
                response = responseMessage.missingCountry;
                return callback(null, response, response.code);
            }
        }catch(err) {
            console.log("ERROR ::: Error in postNewCountry Service: ", err);
            response = new responseMessage.ErrorInQueryingDB();
            return callback(null, response, response.code);
        }
    },

    // This is the service to insert details about new player
    postNewPlayer: async function (body, callback) {
        console.log("INFO ::: body recieved: "+JSON.stringify(body));
        let response;
        try{
            const countryName = body.countryName;
            const name = body.name;
            const age = body.age;
            const profile = body.profile;
            if(!countryName || !name || !age || !profile) {
                console.log("Missing Info ::: countryName: "+countryName+". name: "+name+". age: "+age+". profile: "+profile);
                response = responseMessage.incorrectPayload;
                return callback(null, response, response.code);
            }

            // This is the query to get detials about a country
            const countryData = await countryModel.findOne({name: countryName});
            if (countryData) {
                const playerData = new playerModel({
                    countryId: countryData._id,
                    name: name,
                    age: age,
                    profile: profile
    
                });
                const result = await playerData.save();
                if(result) {
                    response = new responseMessage.GenericSuccessMessage();
                    return callback(null, response, response.code);
                }
                response = new responseMessage.GenericFailureMessage();
                return callback(null, response, response.code);
            } else {
                response = responseMessage.missingCountry;
                return callback(null, response, response.code);
            }
        }catch(err) {
            console.log("ERROR ::: Error in postNewCountry Service: ", err);
            response = new responseMessage.ErrorInQueryingDB();
            return callback(null, response, response.code);
        }
    },

    // This is the service to insert details about new match
    postNewMatch: async function (body, callback) {
        console.log("INFO ::: body recieved: "+JSON.stringify(body));
        let response;
        try{
            const country1Name = body.country1Name;
            const country2Name = body.country2Name;
            const isDraw = body.isDraw;
            const team1Score = body.team1Score;
            const team2Score = body.team2Score;
            const manOfMatch = body.manOfMatch;
            const bestBowler = body.bestBowler;
            const bestFielder = body.bestFielder;
            let result;
            if(!country1Name || !country2Name || !isDraw || !team1Score || !team2Score || !manOfMatch || !bestBowler || !bestFielder) {
                console.log("Missing Info ::: country1Name: "+country1Name+". country2Name: "+country2Name+". isDraw: "+isDraw+
                ". team1Score: "+team1Score+". team2Score: "+team2Score+". maonOfMatch: "+manOfMatch+". bestBowler: "+bestBowler
                +". bestFielder: "+bestFielder);
                response = responseMessage.incorrectPayload;
                return callback(null, response, response.code);
            }

            // This is the query to get details about the country names provided in the request
            const countryData = await countryModel.find({name: {$in: [country1Name, country2Name]}});
            if(countryData.length >= 2){
                //This shows that both countries are valid and exist in DB
                body.team1 = countryData[0];
                body.team2 = countryData[1];
                if(!isDraw) {
                    //This is the case when match is not draw
                    if(body.isCountry1Winner) {
                        body.winner = country1Name;
                        body.loser = country2Name;
                    } else {
                        body.winner = country2Name;
                        body.loser = country1Name;
                    }
                    // This is to insert information about a match
                    matchData = new matchModel(body);
                    result = matchData.save();

                    //This is to update the total matches won or lose by a team
                    await teamModel.update({countryId: body.winner}, {
                        $inc: {
                            totalMatchWon: 1,
                            totalMatchesPlayed: 1
                        }
                    });
                    await teamModel.update({countryId: body.loser}, {
                        $inc: {
                            totalMatchLose: 1 ,
                            totalMatchesPlayed: 1
                        }
                    });
                    if(result) {
                        response = new responseMessage.GenericSuccessMessage();
                        return callback(null, response, response.code);
                    }
                    response = new responseMessage.GenericFailureMessage();
                    return callback(null, response, response.code);
                } else{
                    // This is the case when a match is drawn

                    body.winner = null;
                    body.loser = null;

                    //This  is to update total match drawn in both the teams
                    await teamModel.update({countryId: country1Name}, {
                        $inc: {
                            totalMatchDraw: 1
                        }
                    });
                    await teamModel.update({countryId: country2Name}, {
                        $inc: {
                            totalMatchDraw: 1
                        }
                    });
                    result = matchData.save();
                    if(result) {
                        response = new responseMessage.GenericSuccessMessage();
                        return callback(null, response, response.code);
                    }
                    response = new responseMessage.GenericFailureMessage();
                    return callback(null, response, response.code);
                }
            } else {
                response = responseMessage.missingCountry;
                return callback(null, response, response.code);
            }
        }catch(err) {
            console.log("ERROR ::: Error in postNewCountry Service: ", err);
            response = new responseMessage.ErrorInQueryingDB();
            return callback(null, response, response.code);
        }
    },

    // This is the service to insert details about a player's performance in a match
    postPlayerMatchPerformance: async function (body, callback) {
        console.log("INFO ::: body recieved: "+JSON.stringify(body));
        let response;
        try{
            const matchId = body.matchId;
            const playerId = body.playerId;
            const runScored = body.runScored;
            const wicketTaken = body.wicketTaken;
            const strikeRate = body.strikeRate;

            if(!matchId || !playerId || !runScored || !wicketTaken || !strikeRate) {
                console.log("Missing Info ::: matchId: "+matchId+". playerId: "+playerId+". runScored: "+runScored+". wicketTaken: "+wicketTaken+
                ". strikeRate: "+strikeRate);
                response = responseMessage.incorrectPayload;
                return callback(null, response, response.code);
            }

            const matchPerformanceData = new playerPerformaceModel(body);
            const result = await matchPerformanceData.save();
            await playerModel.update({_id: playerId}, {
                $inc: {
                    totalRunsScored: runScored,
                    totalWicketTaken: wicketTaken
                }
            });
            if(result) {
                response = new responseMessage.GenericSuccessMessage();
                return callback(null, response, response.code);
            }
            response = new responseMessage.GenericFailureMessage();
            return callback(null, response, response.code);
        }catch(err) {
            console.log("ERROR ::: Error in postNewCountry Service: ", err);
            response = new responseMessage.ErrorInQueryingDB();
            return callback(null, response, response.code);
        }
    },
};