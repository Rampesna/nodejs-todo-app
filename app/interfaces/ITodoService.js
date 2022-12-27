const ISequelizeService = require('./ISequelizeService');

class ITodoService extends ISequelizeService {
    constructor() {
        super();

        if (!this.create) {
            throw new Error('ITodoService:create method is not implemented');
        }

        if (!this.update) {
            throw new Error('ITodoService:update method is not implemented');
        }
    }
}

module.exports = ITodoService;
