const Team = require('../models/Team')

async function findAll (req, res) {
  let resObj = {
    success: true,
    data: null
  }
  
  await Team.findAll().then(response => {
    resObj.data = response
    res.status(200).json(resObj)
  }).catch(error => {
    resObj.success = false
    resObj.err_message = error.message
    res.status(405).json(resObj)
  })
}

module.exports = { findAll }
