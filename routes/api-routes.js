const express = require('express');

const apiRouter = express.Router();

const apiController = require("../controllers/api-controller");

const routes = () => {
  apiRouter.route('/:year/:sex/:name').get(apiController.getQuery);

  return apiRouter;
}


module.exports = routes;
