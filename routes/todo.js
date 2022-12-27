const express = require('express');
const router = express.Router();

const AuthenticationMiddleware = require('../app/http/middlewares/AuthenticationMiddleware');

// Controllers
const TodoController = require('../app/http/controllers/TodoController');

// Requests
const GetAllRequest = require("../app/http/requests/TodoController/GetAllRequest");
const GetByIdRequest = require("../app/http/requests/TodoController/GetByIdRequest");
const CreateRequest = require("../app/http/requests/TodoController/CreateRequest");
const UpdateRequest = require("../app/http/requests/TodoController/UpdateRequest");
const DeleteRequest = require("../app/http/requests/TodoController/DeleteRequest");

router.use(AuthenticationMiddleware);
router.get('/getAll', GetAllRequest, TodoController.getAll);
router.get('/getById', GetByIdRequest, TodoController.getById);
router.post('/create', CreateRequest, TodoController.create);
router.put('/update', UpdateRequest, TodoController.update);
router.delete('/delete', DeleteRequest, TodoController.delete);

module.exports = router;
