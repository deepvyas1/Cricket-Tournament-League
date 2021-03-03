"use strict"

const mongoose = require("mongoose");
const objectId = mongoose.Schema.Types.ObjectId;

const matchSchema = new mongoose.Schema({
    matchDay: {type: Date, required: true},
    team1: {type: String, required: true, lowercase: true},
    team2: {type: String, required: true, lowercase: true},
    team1Score: {type: Number, default: 0, required: true},
    team2Score: {type: Number, default: 0, required: true},
    isDraw: {type: Boolean, required: true, default: false},
    winner: {
        type: String,
        required: function () {
            if(this.isDraw){
                return false;
            }
            return true;
        }
    },
    loser: {
        type: String,
        required: function () {
            if(this.isDraw) {
                return false;
            }
            return true;
        }
    },
    manOfMatch: {type: objectId, required: true},
    bestBowler: {type: objectId, required: true},
    bestFielder: {type: objectId, required: true},
    venue: {type: objectId, required: true}
},
{timestamps: true});

const Match = mongoose.mainConnection.model("matches", matchSchema);
module.exports = Match;