"use strict"

const express = require("express");
const adminRouter = express.Router();
const adminControllers = require("./adminControllers");

/*POST: This router is for admin to insert details of new country */
adminRouter.post("/country/insert", (req, res) => {
    adminControllers.insertNewCountry(req, res);
});

/*POST: this router is for admin to insert details of new venue in country */
adminRouter.post("/venue/insert", (req, res) => {
    adminControllers.insertNewVenue(req, res);
});

/*POST: this router is for admin to insert details about a new team */
adminRouter.post("/team/insert", (req, res) => {
    adminControllers.insertNewTeam(req, res);
});

/*POST: this router is for admin to enter details about new player */
adminRouter.post("/player/insert", (req, res) => {
    adminControllers.insertNewPlayer(req, res);
});

/*POST: this router is for admin to enter details about a match */
adminRouter.post("/match/insert", (req, res) => {
    adminControllers.insertNewPlayer(req, res);
});

/*POST: this router is for admin to enter details about a player's performance in a match*/
adminRouter.post("/player/performace", (req, res) => {
    adminControllers.insertNewPlayerMatchPerformance(req, res);
});

module.exports = {
    adminRouter: adminRouter
};