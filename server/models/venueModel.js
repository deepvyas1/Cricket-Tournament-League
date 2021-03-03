"use strict"

const mongoose = require("mongoose");
const objectId = mongoose.Schema.Types.ObjectId;

const venueSchema = new mongoose.Schema({
    name: {type: String, required: true},
    countryId: {type: String, required: true, lowercase: true},
    city: {type: String}
},
{
    timestamps: true
});

const Venue = mongoose.mainConnection.model("venues", venueSchema);
module.exports = Venue;