const { Router } = require('express');

const IngredientsController = require('../controllers/IngredientsController');
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');

const ingredientsRoutes = Router();

const ingredientsController = new IngredientsController();

ingredientsRoutes.delete('/:id', ensureAuthenticated, ingredientsController.delete);

module.exports = ingredientsRoutes;