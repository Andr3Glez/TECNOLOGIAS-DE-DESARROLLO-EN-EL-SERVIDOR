const { Router } = require('express');
const router = Router();

const usersControllers = require('../controllers/userController');

const { authenticateMiddleware, authorizeMiddleware } = require('../authMiddlewares/authmiddleware'); 



router.get('', authenticateMiddleware, usersControllers.getUsers);
router.get('/:id', authenticateMiddleware, usersControllers.getUserById);
router.post('', [authenticateMiddleware, authorizeMiddleware], usersControllers.createUser);
router.put('/:id', [authenticateMiddleware, authorizeMiddleware], usersControllers.updateUser);
router.delete('/:id', [authenticateMiddleware, authorizeMiddleware], usersControllers.deleteUser);

module.exports = router;
