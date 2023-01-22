const vaRoutes = require('express').Router();
const vaController = require('../Controllers/api-controller');

vaRoutes.get('/crousel', vaController.getCrousel);

vaRoutes.get('/login', vaController.getLogin);

vaRoutes.get('/login-info', vaController.getLoginInfo);

vaRoutes.get('/get-pdf', vaController.getPdf);


module.exports = vaRoutes;