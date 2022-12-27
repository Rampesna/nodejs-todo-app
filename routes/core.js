const express = require('express');
const router = express.Router();

const userRouter = require('./user');
const todoRouter = require('./todo');

// Middlewares
const CorsMiddleware = require('../app/http/middlewares/CorsMiddleware');
const CoreRequestMiddleware = require('../app/http/middlewares/CoreRequestMiddleware');

router.use(CorsMiddleware);
router.use(CoreRequestMiddleware);

router.use('/user', userRouter);
router.use('/todo', todoRouter);

module.exports = router;
