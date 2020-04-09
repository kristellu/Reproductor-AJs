'use strict'

var express = require ('express');
var UserController = require('../controllers/user'); //carga ruta de fichero
var api = express.Router(); //permite crear ruta para la api 
var md_auth = require('../middleware/authenticate');

var multipart = require('connect-multiparty');
var md_upload = multipart({uploadDir: './uploads/users'});

api.get('/probando-controlador', md_auth.ensureAuth, UserController.pruebas); //cargar api
api.post('/register', UserController.saveUser); 
api.post('/login', UserController.loginUser); 
api.put('/update-user/:id', md_auth.ensureAuth, UserController.updateUser);
api.post('/upload-image-user/:id', [md_auth.ensureAuth, md_upload], UserController.uploadImage);
api.get('/get-image-user/:id', UserController.getImageFile);


module.exports = api;