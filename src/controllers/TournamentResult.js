const axios = require('axios')
const TournamentResult = require('../models').TournamentResult
const { validationResult } = require('express-validator')
const Team = require('../models').Team
const Tournament = require('../models').Tournament

const pointRules = { 1: 5, 2: 3, 3: 2 }
const coinRules = { 1: 5, 2: 3, 3: 2 }

async function create (req, res) {
  const errors = validationResult(req)
  let resObj = {
    success: true,
    data: null
  }
  if (!errors.isEmpty()) {
    const errMessageObj = errors.array()[0]
    resObj.success = false
    resObj.message = `${errMessageObj.param} - ${errMessageObj.msg}`
    return res.status(400).json(resObj)
  }
  const { team_id, position, tournament_id } = req.body
  const point = pointRules[position]
  // const coin = coinRules[position]

  const data = {
    team_id,
    position,
    point,
    tournament_id
  }
  await TournamentResult.create(data).then(response => {
    resObj.data = response
    resObj.message = 'Successfully create tournament result'
    res.status(200).json(resObj)
  }).catch(error => {
    resObj.success = false
    resObj.message = error.message
    res.status(405).json(resObj)
  })
}

async function findAll (req, res) {
  let resObj = {
    success: true,
    data: null
  }

  await TournamentResult.findAll({
    include: [
      { as: 'team', model: Team },
      { as: 'tournament', model: Tournament }
    ]
  }).then(response => {
    resObj.data = response
    res.status(200).json(resObj)
  }).catch(error => {
    resObj.success = false
    resObj.message = error.message
    res.status(405).json(resObj)
  })
}

async function findOne (req, res) {
  let resObj = {
    success: true,
    data: null
  }

  const id = req.params.id
  
  await TournamentResult.findOne(
    { where: { id }}
  ).then(response => {
    resObj.data = response
    res.status(200).json(resObj)
  }).catch(error => {
    resObj.success = false
    resObj.message = error.message
    res.status(405).json(resObj)
  })
}

async function update (req, res) {
  let resObj = {
    success: true,
    data: null
  }

  const { team_id, position, tournament_id } = req.body
  const id = req.params.id
  const point = pointRules[position]
  // const coin = coinRules[position]

  const data = {
    team_id,
    position,
    point,
    tournament_id,
    updated_at: new Date()
  }
  
  await TournamentResult.update(data, { where: { id }}
  ).then(response => {
    resObj.data = response
    resObj.message = 'Successfully update tournament result'
    res.status(200).json(resObj)
  }).catch(error => {
    resObj.success = false
    resObj.message = error.message
    res.status(405).json(resObj)
  })
}

async function destroy (req, res) {
  let resObj = {
    success: true,
    data: null
  }

  const id = req.params.id
  
  await TournamentResult.destroy(
    { where: { id }}
  ).then(response => {
    resObj.data = response
    resObj.message = 'Successfully delete tournament result'
    res.status(200).json(resObj)
  }).catch(error => {
    resObj.success = false
    resObj.message = error.message
    res.status(405).json(resObj)
  })
}

module.exports = { create, findAll, findOne, update, destroy }