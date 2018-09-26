'use strict'
// const multer = require('multer')
// const upload = multer({dest: 'upload/'}).single('file')

const Controllers = require('../controllers')
const middleware = require('../middlewares')

module.exports = function (app) {
  app.post('/users', Controllers.users.create)

  app.use(middleware.notFind)
}
