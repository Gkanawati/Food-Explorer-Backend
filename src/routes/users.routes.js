const { Router } = require('express');
const multer = require('multer');

const UsersController = require('../controllers/UsersController');
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');

const usersRoutes = Router();

const usersController = new UsersController();

usersRoutes.get('/', ensureAuthenticated, usersController.get);
usersRoutes.post('/', usersController.create);
usersRoutes.put('/', ensureAuthenticated, usersController.update);

module.exports = usersRoutes;