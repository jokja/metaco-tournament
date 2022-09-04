const express = require("express")
const router = express.Router()
const tournamentResultController = require("../controllers/TournamentResult.js")
const tournamentController = require("../controllers/Tournament.js")
const teamController = require("../controllers/Team.js")
const userController = require("../controllers/User.js")
const { body } = require('express-validator')

let routes = app => {
  router.post(
    "/tournament-result",
    body('team_id').isNumeric(),
    body('tournament_id').isNumeric(),
    body('position').isNumeric(),
    tournamentResultController.create
  )
  router.get(
    "/tournament-result",
    tournamentResultController.findAll
  )
  router.get(
    "/tournament-leaderboard",
    tournamentResultController.leaderboard
  )
  router.get(
    "/tournament-result-sum",
    tournamentResultController.findAllSum
  )
  router.get(
    "/tournament-result/:id",
    tournamentResultController.findOne
  )
  router.put(
    "/tournament-result/:id",
    tournamentResultController.update
  )
  router.delete(
    "/tournament-result/:id",
    tournamentResultController.destroy
  )
  router.get(
    "/team",
    teamController.findAll
  )
  router.get(
    "/tournament",
    tournamentController.findAll
  )
  router.get(
    "/user",
    userController.findAll
  )

  return app.use("/", router);
};

module.exports = routes;