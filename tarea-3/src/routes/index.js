const router = require('express').Router();

const authRouter = require('./creador');

const usersRouter = require('./userRoutes'); 

router.use('/creador', authRouter);

router.use('/userRoutes', usersRouter); 

module.exports = router;
