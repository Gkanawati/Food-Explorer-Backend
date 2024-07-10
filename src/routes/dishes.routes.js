const { Router } = require('express');
const multer = require('multer');
const uploadConfig = require('../config/upload');

const DishesController = require('../controllers/DishesController');
const DishImageController = require('../controllers/DishImageController');
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');

const dishesRoutes = Router();
const upload = multer(uploadConfig.MULTER);

const dishesController = new DishesController();
const dishImageController = new DishImageController();

dishesRoutes.get('/', ensureAuthenticated, dishesController.index);
dishesRoutes.get('/:id', ensureAuthenticated, dishesController.show);
dishesRoutes.post('/', ensureAuthenticated, dishesController.create);
dishesRoutes.put('/:id', ensureAuthenticated, dishesController.update);
dishesRoutes.delete('/:id', ensureAuthenticated, dishesController.delete);
dishesRoutes.patch('/image/:id', ensureAuthenticated, upload.single("image"), dishImageController.update);

module.exports = dishesRoutes;