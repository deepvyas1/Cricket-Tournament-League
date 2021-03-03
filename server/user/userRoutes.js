"use strict"

const express = require("express");
const userRouter = express.Router();
const userController = require("./userControllers");

/*GET: This router is for the user to get details of all players playing in this tournament */
userRouter.get("/player/list", (req, res) => {
    userController.getPlayerList(req, res);
});

/*GET: This router is for the user to get details of all players in a particular team playing in this tournament */
userRouter.get("/player/list/:countryId", (req, res) => {
    userController.getTeamPlayerList(req, res);
});

/*GET: This router is for the user to get details of a particular player playing in this tournament */
userRouter.get("/player/:id", (req, res) => {
    userController.getPlayerDetail(req, res);
});

/*GET: This router is for the user to get details of all teams playing in this tournament */
userRouter.get("/team/list", (req, res) => {
    userController.getTeamsList(req, res);
});

/*GET: This router is for the user to get details of a team of a country playing in this tournament */
userRouter.get("/team/:countryId", (req, res) => {
    userController.getTeamDetail(req, res);
});

/*GET: This router is for the user to get details of all countries playing in this tournament */
userRouter.get("/countries/list", (req, res) => {
    userController.getTeamDetail(req, res);
});

/*GET: This router is for the user to get details of all venues in this tournament */
userRouter.get("/venues/list", (req, res) => {
    userController.getVenuesList(req, res);
});

/*GET: This router is for the user to get details of all venues in a particular country in this tournament */
userRouter.get("/venues/list/:countryId", (req, res) => {
    userController.getVenuesList(req, res);
});

/*GET: This router is for the user to get details of all matches played in this tournament */
userRouter.get("/match/list", (req, res) => {
    userController.getMatchesList(req, res);
});

/*GET: This router is for the user to get details of a particular match played in this tournament */
userRouter.get("/match/list/:matchId", (req, res) => {
    userController.getMatchSummary(req, res);
});

/*GET: This router is for the user to get details summary of this tournament */
userRouter.get("/tournament/summary", (req, res) => {
    userController.getMatchSummary(req, res);
});

module.exports = {
    userRouter: userRouter
};