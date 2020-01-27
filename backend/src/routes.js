const { Router } = require('express');

const DevController = require('./controllers/DevController')
const SearchController  = require('./controllers/SearchController')
const UpdateController  = require('./controllers/UpdateController')
const DeleteController  = require('./controllers/DeleteController')

const routes = Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);

routes.put('/update', UpdateController.update)

routes.delete('/delete', DeleteController.destroy)

module.exports = routes;