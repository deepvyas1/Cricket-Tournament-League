"use strict"

const mongoose = require("mongoose");
const objectId = mongoose.Types.ObjectId;

const playerPerformanceSchema = new mongoose.Schema({
    matchId: {type: objectId, required: true},
    playerId: {type: objectId, required: true},
    teamId: {type: objectId, required: true},
    runScored: {type: Number, default: 0},
    wicketTaken: {type: Number, default: 0},
    strikeRate: {type: Number, default: 0}
},
{
    timestamps: true
});

const PlayerPerformance = mongoose.mainConnection.model("playerPerformace", playerPerformanceSchema);
module.exports = PlayerPerformance;