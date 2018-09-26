'use strict'
const Services = require('../services')
class UsersController {
  async create (req, res) {
    const paramas = req.body
    const result = await Services.users.addUser(paramas)
    res.send(result)
  }
}

module.exports = new UsersController()
