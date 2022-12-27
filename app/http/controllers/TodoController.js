const TodoService = require('../../services/sequelize/TodoService');

exports.getAll = async (request, response) => {
    serviceResponse = await TodoService.getAll();
    response.send(serviceResponse, serviceResponse.statusCode);
}

exports.getById = async (request, response) => {
    serviceResponse = await TodoService.getById(request.props.id);
    response.send(serviceResponse, serviceResponse.statusCode);
}

exports.create = async (request, response) => {
    serviceResponse = await TodoService.create(request.user.id, request.props.title);
    response.send(serviceResponse, serviceResponse.statusCode);
}

exports.update = async (request, response) => {
    serviceResponse = await TodoService.update(request.props.id, request.user.id, request.props.title, request.props.closed);
    response.send(serviceResponse, serviceResponse.statusCode);
}

exports.delete = async (request, response) => {
    serviceResponse = await TodoService.delete(request.props.id);
    response.send(serviceResponse, serviceResponse.statusCode);
}
