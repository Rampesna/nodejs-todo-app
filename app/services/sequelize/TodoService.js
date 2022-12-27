const {serviceResponse} = require('../../core/ServiceResponse');
const ITodoService = require('../../interfaces/ITodoService');
const TodoModel = require('../../models/sequelize/todo')();

class TodoService extends ITodoService {
    constructor() {
        super();
    }

    async getAll() {
        let allTodos = await TodoModel.findAll();
        return serviceResponse(
            true,
            'All Todos',
            allTodos,
            200
        );
    }

    async getById(
        id
    ) {
        let todo = await TodoModel.findByPk(id);
        return serviceResponse(
            true,
            'Todo',
            todo,
            200
        );
    }

    async delete(
        id
    ) {
        let todo = await TodoModel.findByPk(id);
        if (todo != null) {
            await todo.destroy();
            return serviceResponse(
                true,
                'Todo deleted',
                null,
                200
            );
        } else {
            return serviceResponse(
                false,
                'Todo not found',
                null,
                404
            );
        }
    }

    async create(
        userId,
        title
    ) {
        let todo = await TodoModel.create({
            userId: userId,
            title: title,
            closed: false
        });
        return serviceResponse(
            true,
            'Todo created',
            todo,
            201
        );
    }

    async update(
        id,
        userId,
        title,
        closed
    ) {
        let todo = await TodoModel.findByPk(id);
        if (todo != null) {
            if (todo.userId !== userId) {
                return serviceResponse(
                    false,
                    'Todo not found',
                    null,
                    404
                );
            } else {
                todo.title = title;
                if (closed != null) todo.closed = closed;
                await todo.save();
                return serviceResponse(
                    true,
                    'Todo updated',
                    todo,
                    200
                );
            }
        } else {
            return serviceResponse(
                false,
                'Todo not found',
                null,
                404
            );
        }
    }
}

module.exports = new TodoService();
