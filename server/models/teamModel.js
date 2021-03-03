"use strict"

const mongoose = require("mongoose");
const playerSchema = require("./playerModel").playerSchema;

const teamSchema = new mongoose.Schema({
    countryId: {type: String, required: true, lowercase: true},
    totalMatchWon: {type: Number, default: 0},
    totalMatchLose: {type: Number, default: 0},
    totalMatchDraw: {type: Number, default: 0},
    totalMatchesPlayed: {type: Number, default: 0},
    listOfPlayers: {
        type: [mongoose.Schema.Types.ObjectId]},
        ref: playerSchema
});

const Team = mongoose.mainConnection.model("teams", teamSchema);
module.exports = Team;