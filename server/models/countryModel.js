"use strict"

const mongoose = require("mongoose");
const objectId = mongoose.Schema.Types.ObjectId;

const countrySchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        lowercase: true,
        required: true,
    }
    },
    {
        timestamps: true
    }
);

const Country = mongoose.mainConnection.model("countries", countrySchema);
module.exports = Country;
