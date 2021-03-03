"use strict"

const mongoose = require("mongoose");
const objectId = mongoose.Types.ObjectId;

const playerSchema = new mongoose.Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true},
    countryId: {type: String, required: true, lowercase: true},
    profile: {
        type: String,
        enum: ["batsman", "bowler","wicketkeeper-batsman"],
        required: true
    },
    totalRunsScored: {type: Number, default: 0},
    totalWicketTaken: {type: Number, default: 0},
    teamId: { type: objectId, required: true}
});

const Player = mongoose.mainConnection.model("players", playerSchema);
module.exports = {
    Player: Player,
    playerSchema: playerSchema
};